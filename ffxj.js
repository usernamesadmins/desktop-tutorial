var obj = JSON.parse($response.body);
obj = {
  "placements": {
    "fallback_offering_id": "sale"
  },
  "offerings": [
    {
      "metadata": null,
      "identifier": "sale",
      "description": "pro versions",
      "packages": [
        {
          "platform_product_identifier": "com.uzero.funforcam.monthlysub",
          "identifier": "$rc_monthly"
        },
        {
          "platform_product_identifier": "com.uzero.funforcam.anualsub",
          "identifier": "$rc_annual"
        },
        {
          "platform_product_identifier": "com.uzero.funforcam.lifetimepurchase.upfrommonth",
          "identifier": "$rc_lifetime"
        },
        {
          "platform_product_identifier": "com.uzero.funforcam.lifetimepurchase.upgrade",
          "identifier": "lifetime2"
        },
        {
          "platform_product_identifier": "com.uzero.funforcam.lifetimepurchase.upfrommonth",
          "identifier": "lifetimefrommonth"
        }
      ]
    }
  ],
  "current_offering_id": "sale"
};
$done({body: JSON.stringify(obj)});
