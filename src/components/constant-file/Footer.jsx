import React from 'react';

const Footer = () => {
  const categories = [
    ["Vegetables & Fruits", "Breakfast & instant food", "Bakery & Biscuits", "Atta, rice & dal", "Sauces & spreads", "Organic & gourmet", "Baby care", "Cleaning essentials", "Personal care"],
    ["Dairy, bread & eggs", "Cold drinks & juices", "Tea, coffee & drinks", "Masala, oil & more", "Chicken, meat & fish", "Paan corner", "Pharma & wellness", "Home & office", "Pet care"]
  ];

  const sections = [
    {
      title: "Get to know us",
      links: ["Company", "About", "Blog", "Help Center", "Our Value"]
    },
    {
      title: "For Consumers",
      links: ["Payments", "Shipping", "Product Returns", "FAQ", "Shop Checkout"]
    },
    {
      title: "Become a shopper",
      links: ["Shop Opportunities", "Become a Shopper", "Earnings", "Ideas & Guides", "New Retailers"]
    },
    {
      title: "Freshcart Programs",
      links: ["FreshCart Programs", "Gift Cards", "Promos & Coupons", "FreshCart Ads", "Careers"]
    }
  ];

  return (
    <div className="bg-[#f0f3f2]">
      <div className="max-w-7xl mx-auto gap-9 flex flex-wrap p-7 lg:p-10">
        <div className="flex flex-col">
          <h4 className="font-bold mb-4">Categories</h4>
          <div className="flex gap-5">
            {categories.map((column, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                {column.map((item, index) => (
                  <a key={index} href="#" className="text-[#7c7f7f] hover:text-[#2dcf53] transition duration-300">{item}</a>
                ))}
              </div>
            ))}
          </div>
        </div>
        {sections.map((section, idx) => (
          <div key={idx} className="flex-1">
            <h4 className="font-bold mb-4">{section.title}</h4>
            <div className="flex flex-col gap-4">
              {section.links.map((link, index) => (
                <a key={index} href="#" className="text-[#7c7f7f] hover:text-[#2dcf53] transition duration-300">{link}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;