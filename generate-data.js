const { names, countries } = require("./data");

module.exports = () => {
  const name = names[Math.floor(Math.random() * names.length)];

  const user = {
    name,
    location: countries[Math.floor(Math.random() * countries.length)],
    phone: Math.floor(Math.random() * 1000000000),
    email: `${name}@gmail.com`.toLowerCase(),
    vip: Math.random() >= 0.5
  };

  const order = {
    id: String(Math.random() * 1000),
    items: [],
    datePlaced: new Date(Date.now()),
    total: Math.floor(Math.random() * 6) + 1,
    currency: "GBP",
    shippingOption: "Basic",
    payment: "Credit Card",
    deliveryCountry: "UK"
  };

  const profile = {
    averageOrderValue: Math.floor(Math.random() * 20) + 1,
    averageOrdersPerMonth: (Math.random() * 3).toFixed(),
    memberSince: new Date(),
    lastOrder: new Date()
  };

  return {
    user,
    order,
    profile
  };
};

function getRandomProduct() {
  return;
}
