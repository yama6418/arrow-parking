"use client";

interface LocalBusinessJsonLdProps {
  name: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
  };
  telephone: string;
  url: string;
  image: string;
  description: string;
  priceRange: string;
  capacity: number;
}

export function LocalBusinessJsonLd({
  name,
  address,
  telephone,
  url,
  image,
  description,
  priceRange,
  capacity,
}: LocalBusinessJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ParkingFacility",
    name: name,
    description: description,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      addressCountry: "JP",
    },
    telephone: telephone,
    url: url,
    image: image,
    priceRange: priceRange,
    capacity: capacity,
    areaServed: "JP",
    availableLanguage: "ja",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface OrganizationJsonLdProps {
  name: string;
  url: string;
  logo: string;
  description: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
  };
}

export function OrganizationJsonLd({
  name,
  url,
  logo,
  description,
  telephone,
  address,
}: OrganizationJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: name,
    url: url,
    logo: logo,
    description: description,
    telephone: telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      addressCountry: "JP",
    },
    areaServed: ["JP"],
    sameAs: ["https://github.com/yama6418/arrow-parking"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface BreadcrumbJsonLdProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
