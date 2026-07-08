import React from "react";
import "./pricing.css";
import Footer from "../components/Footer/Footer";
import pricinghero from "../assets/images/pricinghero.png";
import pricingsteam from "../assets/images/pricingsteam.png";
import finalpricing from "../assets/images/finalpricing.png";
import intermediate from "../assets/images/Intermediate.png";




const laundryServices = [
  { item: "Wash & Steam Iron", reg: "₹130/Kg", offer: "₹104/Kg" },
  { item: "Wash & Fold", reg: "₹95/Kg", offer: "₹84/Kg" },
  { item: "Premium Laundry", reg: "₹210/Kg", offer: "₹210/Kg" },
  { item: "Woolen Laundry", reg: "₹185/Kg", offer: "₹185/Kg" },
];


const ironingmensWearNew = [
  { item: "Shirt / T-Shirt", reg: "₹25/₹25", offer: "₹20/₹20" },
  { item: "Trouser / Jeans", reg: "₹25/₹25", offer: "₹20/₹20" },
  { item: "Coat", reg: "₹70", offer: "₹56" },
  { item: "Suit 2 Pcs", reg: "₹95", offer: "₹76" },
  { item: "Suit 3 Pcs", reg: "₹120", offer: "₹96" },
  { item: "Jacket", reg: "₹70+", offer: "₹56+" },
];


const mensWear = [
  { item: "Shirt / T-Shirt", reg: "₹95", offer: "₹76" },
  { item: "Trouser / Jeans", reg: "₹95", offer: "₹76" },
  { item: "Coat", reg: "₹240", offer: "₹192" },
  { item: "Suit 2 Pcs", reg: "₹335", offer: "₹268" },
  { item: "Suit 3 Pcs", reg: "₹430", offer: "₹344" },
  { item: "Jacket", reg: "₹265+", offer: "₹212+" },
];


const household = [
  { item: "S Blanket S/D", reg: "₹265/₹295", offer: "₹212/₹236" },
  { item: "D Blanket S/D", reg: "₹365/₹455", offer: "₹292/₹364" },
  { item: "Bedsheet S/D", reg: "₹120/₹180", offer: "₹96/₹144" },
  { item: "Quilt S/D", reg: "₹295/₹455", offer: "₹236/₹364" },
  { item: "Carpet", reg: "₹45/Sq Ft", offer: "₹36/Sq Ft" },
  { item: "Curtain", reg: "₹160+/Panel", offer: "₹128+/Panel" },
];


const womensWear = [
  { item: "Kurta", reg: "₹120+", offer: "₹96+" },
  { item: "Salwar", reg: "₹150+", offer: "₹120+" },
  { item: "Saree", reg: "₹210+", offer: "₹168+" },
  { item: "Dress", reg: "₹210+", offer: "₹168+" },
  { item: "Lehenga", reg: "₹365+", offer: "₹292+" },
  { item: "Shawl", reg: "₹180+", offer: "₹144+" },
];


const shoes = [
  { item: "Sports", reg: "₹180", offer: "₹144" },
  { item: "Canvas", reg: "₹180", offer: "₹144" },
  { item: "Leather", reg: "₹360", offer: "₹288" },
  { item: "Suede Leather", reg: "₹480", offer: "₹384" },
  { item: "Boots", reg: "₹510+", offer: "₹408+" },
];


const ironingwomensWear = [
  { item: "Kurta", reg: "₹40+", offer: "₹32+" },
  { item: "Salwar", reg: "₹50+", offer: "₹40+" },
  { item: "Saree", reg: "₹45+", offer: "₹36+" },
  { item: "Dress", reg: "₹60+", offer: "₹48+" },
  { item: "Lehenga", reg: "₹100+", offer: "₹80+" },
  { item: "Shawl", reg: "₹60+", offer: "₹48+" },
];


const householdironing = [
  { item: "Bedsheet S/D", reg: "₹40/₹60", offer: "₹32/₹48" },
  { item: "Curtain", reg: "₹50+/Panel", offer: "₹40+/Panel" },
];


export default function Pricing() {
  const downloadPriceList = (fileName:any) => {
    const link = document.createElement("a");
    link.href = `/${fileName}`;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <>      {/* SECTION 1 */}
      <section className="pricing-wrapper">
        <div className="pricing-image-card">
          <div className="pricing-image">
            <img src={pricinghero} alt="Pricing Banner" />
          </div>

          <div className="hero-controls">
            <select className="location-dropdown">
              <option value="">Select Location</option>
              <option value="Angul">Angul</option>
            </select>
            <button
              onClick={() => downloadPriceList("laundry-price-list.pdf")}
            >
              Download Price List
            </button>
          </div>
        </div>


        <div className="pricing-table-card">
          <h2>Laundry Services</h2>

          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Reg Price</th>
                <th>1st Order Price</th>
              </tr>
            </thead>

            <tbody>
              {laundryServices.map((row) => (
                <tr key={row.item}>
                  <td>{row.item}</td>
                  <td>{row.reg}</td>
                  <td>{row.offer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>



      {/* SECTION 2 */}
      <section className="extra-tables">

        <div className="pricing-table-card">
          <h2>Men's Wear</h2>

          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Reg Price</th>
                <th>1st Order Price</th>
              </tr>
            </thead>

            <tbody>
              {mensWear.map((row) => (
                <tr key={row.item}>
                  <td>{row.item}</td>
                  <td>{row.reg}</td>
                  <td>{row.offer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>



        <div className="pricing-table-card">
          <h2>Household</h2>

          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Reg Price</th>
                <th>1st Order Price</th>
              </tr>
            </thead>

            <tbody>
              {household.map((row) => (
                <tr key={row.item}>
                  <td>{row.item}</td>
                  <td>{row.reg}</td>
                  <td>{row.offer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>



        <div className="pricing-table-card">
          <h2>Women's Wear</h2>

          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Reg Price</th>
                <th>1st Order Price</th>
              </tr>
            </thead>

            <tbody>
              {womensWear.map((row) => (
                <tr key={row.item}>
                  <td>{row.item}</td>
                  <td>{row.reg}</td>
                  <td>{row.offer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>



        <div className="pricing-table-card">
          <h2>Shoes</h2>

          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Reg Price</th>
                <th>1st Order Price</th>
              </tr>
            </thead>

            <tbody>
              {shoes.map((row) => (
                <tr key={row.item}>
                  <td>{row.item}</td>
                  <td>{row.reg}</td>
                  <td>{row.offer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </section>



      {/* BLUE HEADER */}

      <div className="blue-header">
        <h2>Steam Ironing Service Price List</h2>
      </div>




      {/* SECTION 3 - Steam Ironing Men's Wear */}

      <section className="pricing-wrapper">

        <div className="pricing-image-card">

          <div className="pricing-image">
            <img src={pricingsteam} alt="Steam Banner" />
          </div>


          <div className="hero-controls">

            <button
              onClick={() => downloadPriceList("steam-ironing-price-list.pdf")}
            >
              Download Price List
            </button>


            <button  onClick={() =>
                    window.open(
                        "https://app.fabklean.com/",
                        "_blank"
                    )
                }>
              Schedule Free Pickup
            </button>

          </div>

        </div>



        <div className="pricing-table-card">

          <h2>Men's Wear</h2>


          <table>

            <thead>
              <tr>
                <th>Item</th>
                <th>Reg Price</th>
                <th>1st Order Price</th>
              </tr>
            </thead>


            <tbody>

              {ironingmensWearNew.map((row) => (
                <tr key={row.item}>
                  <td>{row.item}</td>
                  <td>{row.reg}</td>
                  <td>{row.offer}</td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </section>      {/* SECTION 4 - Women's Steam Ironing */}

      <section className="pricing-wrapper">

        <div className="pricing-image-card">

          <div className="pricing-image">
            <img src={intermediate} alt="Women's Ironing Banner" />
          </div>


          <div className="hero-controls">

            <button
              onClick={() => downloadPriceList("steam-ironing-price-list.pdf")}
            >
              Download Price List
            </button>

          </div>

        </div>



        <div className="pricing-table-card">

          <h2>Women's Wear</h2>


          <table>

            <thead>
              <tr>
                <th>Item</th>
                <th>Reg Price</th>
                <th>1st Order Price</th>
              </tr>
            </thead>


            <tbody>

              {ironingwomensWear.map((row) => (
                <tr key={row.item}>
                  <td>{row.item}</td>
                  <td>{row.reg}</td>
                  <td>{row.offer}</td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </section>





      {/* SECTION 5 - Household Steam Ironing */}

      <section className="pricing-wrapper">

        <div className="pricing-image-card">

          <div className="pricing-image">

            <img src={finalpricing} alt="Household Ironing Banner" />

          </div>



          <div className="hero-controls">


            <button
              onClick={() => downloadPriceList("steam-ironing-price-list.pdf")}
            >
              Download Price List
            </button>



            <button  onClick={() =>
                    window.open(
                        "https://app.fabklean.com/",
                        "_blank"
                    )
                }>
              Schedule Free Pickup
            </button>


          </div>


        </div>




        <div className="pricing-table-card">


          <h2>Household</h2>



          <table>


            <thead>

              <tr>
                <th>Item</th>
                <th>Reg Price</th>
                <th>1st Order Price</th>
              </tr>

            </thead>



            <tbody>


              {householdironing.map((row) => (

                <tr key={row.item}>

                  <td>{row.item}</td>

                  <td>{row.reg}</td>

                  <td>{row.offer}</td>

                </tr>


              ))}


            </tbody>



          </table>



        </div>


      </section>




      <Footer />

    </>
  );
}