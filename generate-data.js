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

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  function getCurrency() {
    switch (getRandomInt(1, 4)) {
      case 1:
        return "£";
      case 2:
        return "$";
      case 3:
        return "€";
      case 4:
        return "¥";
    }
  }

  const order = {
    id: String(Math.random() * 1000),
    items: [],
    datePlaced: new Date(Date.now()),
    total: getRandomInt(1000, 50000),
    currency: getCurrency(),
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
