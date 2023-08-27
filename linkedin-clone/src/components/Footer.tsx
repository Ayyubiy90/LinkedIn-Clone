import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        
        <div className="flex justify-around">
          <div>
            <h3 className="text-lg font-semibold">About Us</h3>
            <ul>
              <li>Our Team</li>
              <li>Our Mission</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul>
              <li>Email</li>
              <li>Phone</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>

        {/* New Content */}
        <div className="flex justify-around mt-8">
          <div>
            <h3 className="text-lg font-semibold">New Section 1</h3>
            <ul>
              <li>New Item 1</li>
              <li>New Item 2</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">New Section 2</h3>
            <ul>
              <li>New Item 3</li>
              <li>New Item 4</li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
