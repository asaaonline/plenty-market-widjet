<?php

namespace GoogleMapsWidget\Widgets;

use Ceres\Widgets\Helper\BaseWidget;

class MapsWidget extends BaseWidget
{
    protected $template = "GoogleMapsWidget::Widgets.MapsWidget";

    protected function getTemplateData($widgetSettings, $isPreview)
    {
        $address = $widgetSettings["address"]["mobile"];

        $apiKey = $widgetSettings["apiKey"]["mobile"];
        $style =$widgetSettings["headlineStyle"]["mobile"];
        // echo($widgetSettings);
        $facebook=$widgetSettings["facebook"]["mobile"];
        $checkfacebook=$widgetSettings["checkfacebook"]["mobile"];
        $checkLinkedin=$widgetSettings["checkLinkedin"]["mobile"];
        $checkGoogle=$widgetSettings["checkGoogle"]["mobile"];
        $checkPinterest=$widgetSettings["checkPinterest"]["mobile"];
        if (empty($address) || empty($apiKey)||empty($facebook))
        {
            return [
                "geocoding_data" => [
                    "facebook"=>"facebook",
                    "address" => "colombo",
                    "apiKey" => "22",
                    "style" => $style,
                    "checkfacebook" => $checkfacebook,
                    "checkLinkedin" => $checkLinkedin,
                    "checkGoogle"=> $checkGoogle,
                    "checkPinterest" => $checkPinterest
                ]
            ];
        }else{
            return [
                "geocoding_data" => [
                    "facebook"=>$facebook,
                    "address" => "ratnapura",
                    "apiKey" => $apiKey,
                    "style" => $style,
                    "checkfacebook" => $checkfacebook,
                    "checkLinkedin" => $checkLinkedin,
                    "checkGoogle"=> $checkGoogle,
                     "checkPinterest" => $checkPinterest
                ]
            ];
        }

        // $address = urlencode($address);

        // // google map geocode api url
        // $url = "https://maps.googleapis.com/maps/api/geocode/json?address={$address}&key={$apiKey}";

        // $curl = curl_init();

        // curl_setopt_array($curl, array(
        //     CURLOPT_RETURNTRANSFER => 1,
        //     CURLOPT_URL => $url
        // ));

    //     $result_json = curl_exec($curl);
    //     $result = json_decode($result_json, true);

    //     curl_close($curl);

    //     $lat = isset($result["results"][0]["geometry"]["location"]["lat"]) ? $result["results"][0]["geometry"]["location"]["lat"] : "";
    //     $lng = isset($result["results"][0]["geometry"]["location"]["lng"]) ? $result["results"][0]["geometry"]["location"]["lng"] : "";
    //     $formatted_address = isset($result["results"][0]["formatted_address"]) ? $result["results"][0]["formatted_address"] : "";

    //     if ($lat && $lng && $formatted_address)
    //     {
            // return [
            //     "geocoding_data" => [
                    
            //         "address" => "ratnapura",
            //         "apiKey" => $apiKey
            //     ]
            // ];
    //     }

    //     return [
    //         "geocoding_data" => false
    //     ];

    
    }
}
