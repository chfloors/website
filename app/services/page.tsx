import Image from "next/image";
import ImageList from "../ui/image-list";
import Link from "next/link";
import ServiceList from "../ui/service-list";

type ImageType = {
  alt: string;
  link: string;
};

type ServiceType = {
  image: ImageType;
  name: string;
  description: string;
  link: string;
};

export default function Services() {
  const services: ServiceType[] = [
    {
      image: { alt: "Image 1", link: "/chhardwood/images/test1.jpg" },
      name: "Service 1",
      description: "Description of Service 1",
      link: "/service1",
    },
    {
      image: { alt: "Image 2", link: "/chhardwood/images/test2.jpg" },
      name: "Service 2",
      description: "Description of Service 2",
      link: "/service2",
    },
    {
      image: { alt: "Image 1", link: "/chhardwood/images/test3.jpg" },
      name: "Service 3",
      description: "Description of Service 3",
      link: "/service3",
    },
    {
      image: { alt: "Image 1", link: "/chhardwood/images/test1.jpg" },
      name: "Service 4",
      description: "Description of Service 4",
      link: "/service4",
    },
    {
      image: { alt: "Image 2", link: "/chhardwood/images/test2.jpg" },
      name: "Service 5",
      description: "Description of Service 5",
      link: "/service5",
    },
    {
      image: { alt: "Image 1", link: "/chhardwood/images/test3.jpg" },
      name: "Service 6",
      description: "Description of Service 6",
      link: "/service6",
    },
    {
      image: { alt: "Image 1", link: "/chhardwood/images/test1.jpg" },
      name: "Service 7",
      description: "Description of Service 7",
      link: "/service7",
    },
  ];

  return (
    <main className="pb-5">
      <div className="row w-100 m-0 py-5 wood-bg-2 border-bottom border-top border-light border-3">
        <h1 className="fs-4 text-center text-light m-0 p-0">Services</h1>
        <h2 className="body-text fs-6 text-center m-0 mb-2 text-secondary">
          A list of our services
        </h2>
        <div className="bar" />
      </div>

      <ServiceList services={services} />
    </main>
  );
}
