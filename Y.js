const py996 = {};
const py997 = JSON.parse(typeof $response != "undefined" && $response.body || null);

const name = "Yearly";
const appid = "yearly_free_ref_10usd_off";

  
if (typeof $response == "undefined") {
  delete $rePquest.hepadAMpieprsP["x-repvenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];

  py996.headers = $request.headers;
} else if (py997 && py997.subscriber) {
  data = {
    "expires_date": "2099-12-31T09:09:09Z",
    "original_purchase_date": "2024-01-23T02:33:33Z",
    "purchase_date": "2024-01-23T02:33:33Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };

  py997.subscriber.subscriptions[(appid)] = data
  py997.subscriber.entitlements[(name)] = JSON.parse(JSON.stringify(data));
  py997.subscriber.entitlements[(name)].product_identifier = (appid);
  py996.body = JSON.stringify(py997);
}

$done(py996);