import { Metadata } from "next";
import ServiceList from "../ui/service-list";
import { PageHeading } from "../ui/page-heading";

export const metadata: Metadata = {
  title: "Services | CH Hardwood Floors",
  description:
    "Transform your home with our expert flooring installation and refinishing services. We offer a comprehensive range of solutions, including installation, sanding, staining, finishing, and repairs for various flooring types like hardwood, vinyl, laminate, carpet, and cork.",
  keywords:
    "flooring, hardwood, wood, floors, installation, refinishing, sanding, repair, Tri-State Area, New York, Pennsylvania, South Jersey, services, installation, finishing, cleaning, repairs",
};

export default function Services() {
  const services: ServiceType[] = [
    {
      image: {
        alt: "Example of a hardwood installation.",
        link: "/chhardwood/images/repair1.jpeg",
      },
      name: "Installing",
      description:
        "Hardwood, COREtec, laminate, vinyl, carpet, steps, railings, decks, and more.",
      link: "/chhardwood/services/installing",
    },
    {
      image: {
        alt: "Example of finishing work done on an installation.",
        link: "/chhardwood/images/installation1.jpeg",
      },
      name: "Finishing",
      description:
        "Sanding, staining, finish of hardwood and other types of flooring, stairs, decks, and railings.",
      link: "/chhardwood/services/finishing",
    },
    {
      image: {
        alt: "Demonstration of cleaning after installation and finishing",
        link: "/chhardwood/images/test2.jpg",
      },
      name: "Cleaning",
      description:
        "Cleaning of commercial, residential, and construction sites, dustless installation and finishing.",
      link: "/chhardwood/services/cleaning",
    },
    {
      image: {
        alt: "Demonstration of repairs of any type of interior installation",
        link: "/chhardwood/images/cleaning1.jpeg",
      },
      name: "Repairs",
      description:
        "Repair of any type of interior installation including flooring, stairs, railings, and decks",
      link: "/chhardwood/services/repairs",
    },
  ];

  return (
    <>
      <section>
        <PageHeading
          title="Premium Flooring Services"
          subtitle="Ways to Transform Your Home"
        />
      </section>

      <section className="container-fluid">
        <div className="row g-5 justify-content-center mt-3">
          <ServiceList services={services} />
        </div>
      </section>

      <section className="container-fluid my-5">
        <h2 className="fs-5">Description of Services</h2>

        <p>
          Transform your home with our expert flooring installation and
          refinishing services. We offer a comprehensive range of solutions,
          including installation, sanding, staining, finishing, and repairs for
          various flooring types like hardwood, vinyl, laminate, carpet, and
          cork. Whether you are looking to update a single room or your entire
          house, our team of skilled professionals will deliver exceptional
          results with meticulous attention to detail.
        </p>

        <h2 className="fs-5">We offer a wide range of services including:</h2>

        <h3 className="fs-6">Installation:</h3>

        <ul>
          <li>
            <strong>Hardwood:</strong> Enhance the elegance and value of your
            home with beautiful hardwood flooring. We install a variety of
            hardwood species, ensuring a perfect fit for your style and budget.
          </li>
          <li>
            <strong>Vinyl:</strong> Enjoy the versatility and durability of
            vinyl flooring. We offer a wide selection of colors and patterns to
            complement any décor.
          </li>
          <li>
            <strong>Laminate:</strong> Achieve the look of hardwood or stone at
            a fraction of the cost with laminate flooring. We provide expert
            installation for a seamless and long-lasting finish.
          </li>
          <li>
            <strong>Carpet:</strong> Add warmth and comfort to your space with
            plush carpeting. We offer various carpet styles and materials to
            suit your needs and preferences.
          </li>
          <li>
            <strong>Cork:</strong> Embrace the eco-friendly and sound-absorbing
            qualities of cork flooring. Our team ensures precise installation
            for a unique and sustainable flooring solution.
          </li>
          <li>
            <strong>Stairs & Railings:</strong> Elevate the functionality and
            aesthetics of your staircase with our expert installation and
            refinishing services for both steps and railings.
          </li>
        </ul>

        <h3 className="fs-6">Sanding, Staining & Finishing:</h3>
        <p>
          Revitalize your existing hardwood floors, stairs, and railings with
          our professional sanding, staining, and finishing services. We use
          dustless equipment to minimize mess and ensure a smooth, flawless
          finish. Choose from a wide array of stain colors to match your desired
          style.
        </p>

        <h3 className="fs-6">Repairs:</h3>
        <p>
          Do not let damaged floors detract from the beauty of your home. We
          offer comprehensive repair solutions for all types of flooring,
          restoring its functionality and appearance.
        </p>

        <h3 className="fs-6">House Cleaning:</h3>
        <p>
          Enjoy a sparkling clean home with our professional house cleaning
          services. We provide thorough and efficient cleaning, leaving your
          space fresh and inviting.
        </p>

        <h2 className="fs-5">Your Project in Expert Hands</h2>

        <p>
          With over 15 years of experience, our team possesses the knowledge and
          expertise to handle projects of all sizes, from residential to
          commercial and construction. We prioritize quality craftsmanship and
          customer satisfaction, ensuring that every project is completed to the
          highest standards.
        </p>

        <h3 className="fs-6">Benefits of Choosing Us:</h3>

        <ul>
          <li>
            <strong>Mobile Showroom:</strong> We bring the showroom to you!
            Explore a wide variety of flooring samples in the comfort of your
            own home, allowing you to visualize how different options will
            complement your existing décor and furniture.
          </li>
          <li>
            <strong>Quality Materials:</strong> We source premium materials from
            trusted suppliers, guaranteeing durability and longevity for your
            flooring investment.
          </li>
          <li>
            <strong>Dustless Service Available:</strong> Minimize disruption and
            mess with our dustless sanding and refinishing services.
          </li>
          <li>
            <strong>Comprehensive Solutions:</strong> From installation to
            repairs and cleaning, we offer a complete range of services to meet
            all your flooring needs.
          </li>
        </ul>

        <p>
          <strong>
            Contact us today for a free consultation and let us bring your
            flooring vision to life!
          </strong>
        </p>
      </section>
    </>
  );
}
