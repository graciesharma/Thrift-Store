import React from "react";

const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>
      <img
        src="https://plus.unsplash.com/premium_photo-1680193011221-e777119b49e1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Sustainability"
        style={{ width: "100%", height: "auto", marginBottom: "2rem" }}
      />
      <div style={{ padding: "0 2rem" }}>
        <p>
          Welcome to Thrift Store where fashion meets sustainability. As a
          pioneering thrift store platform, we're dedicated to transforming the
          way the world thinks about and interacts with clothing. Our mission is
          simple yet profound: to promote sustainable fashion choices that
          benefit our planet, one garment at a time.
        </p>
        <p>
          We believe in the power of diversity and inclusivity, offering a wide
          range of clothing for men, women, and gender-neutral options. Our
          carefully curated selection ensures that everyone can find something
          that resonates with their personal style while supporting eco-friendly
          practices.
        </p>
        <p>
          At the heart of our platform is a deep commitment to sustainability.
          Through recycling initiatives, carbon footprint reduction, and
          community education, we advocate for a future where fashion is both
          stylish and sustainable. Our efforts extend beyond the wardrobe, aiming
          to inspire positive change in the fashion industry and beyond.
        </p>
        <p>
          Join us on this journey towards a more sustainable future. Whether
          you're shopping, donating, or simply spreading the word, your actions
          make a difference. Together, let's redefine fashion for the better,
          making conscious choices that celebrate style, diversity, and
          environmental responsibility.
        </p>
      </div>
      <hr style={{ margin: "4rem 0", border: "0", borderTop: "2px solid #ccc" }} />
      <div style={{ padding: "0 2rem" }}>
        <h2 style={{ textAlign: "center", margin: "2rem 0" }}>User Manual</h2>
        <h3>For Merchants: Start Selling Your Clothing</h3>
        <ol>
          <li>
            <strong>Register as a Seller:</strong> Navigate to the "Register"
            section on our homepage, select the option to sign up as a "Seller,"
            fill out the form, and submit it for approval.
          </li>
          <li>
            <strong>Await Approval:</strong> Our admin team reviews submissions
            within 48 hours. You'll receive an email notification once approved,
            enabling access to the seller platform.
          </li>
          <li>
            <strong>Setting Up Your Shop:</strong> Log in to customize your shop,
            add product listings, manage inventory, and use tools to connect with
            customers.
          </li>
          <li>
            <strong>Start Selling:</strong> Once set up, your products are
            available to customers. Monitor your sales and engage with buyers
            through your dashboard.
          </li>
        </ol>
        <h3>For Members: Enjoy Shopping</h3>
        <ol>
          <li>
            <strong>Sign Up as a Member:</strong> Use the "Sign Up" button to
            create your account and start browsing our collection.
          </li>
          <li>
            <strong>Explore and Purchase:</strong> Find your next favorite item
            using our search tools, add to cart, and checkout.
          </li>
          <li>
            <strong>Enjoy Your New Finds:</strong> Track your order through email
            notifications and await the arrival of your stylish selections.
          </li>
        </ol>
        <p>
          Need help? Our customer service team is ready to assist. Reach out
          through our "Contact Us" page for support.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
