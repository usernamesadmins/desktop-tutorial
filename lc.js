var obj = JSON.parse($response.body);
obj = {
  "placements": {
    "fallback_offering_id": "sale"
  },
  "offerings": [
    {
      "metadata": null,
      "identifier": "sale",
      "description": "sale active",
      "packages": [
        {
          "platform_product_identifier": "com.uzero.cn.fojicam.month1",
          "identifier": "$rc_monthly"
        },
        {
          "platform_product_identifier": "com.uzero.cn.fojicam.annual1",
          "identifier": "$rc_annual"
        },
        {
          "platform_product_identifier": "com.uzero.cn.fojicam.life2",
          "identifier": "$rc_lifetime"
        },
        {
          "platform_product_identifier": "com.uzero.cn.fojicam.life2",
          "identifier": "Lifetime2"
        }
      ]
    }
  ],
  "current_offering_id": "sale"
};
$done({body: JSON.stringify(obj)});