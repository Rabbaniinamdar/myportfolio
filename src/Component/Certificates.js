import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import github from '../images/github.png';
import Html_css_js from '../images/Html_css_js.png';
import web_dev from '../images/web_dev.png';
import awsda from '../images/awsda.jpg';
import gcdl from '../images/gcdl.jpg';
import kodnest from '../images/kodnest.jpg';
import excelr from '../images/excelr.jpg';
import jlv from '../images/jl1v1.jpg';
import bravo from '../images/ba.jpg';
import '../CSS/Certificates.css';

// NOTE: Replace placeholder `null` images below with actual certificate screenshots
// once you have them. Add the images to your ../images/ folder.

const allCertificates = [
    {
        img: awsda,               // TODO: add image e.g. import techm from '../images/techm-cert.png'
        name: 'AWS Certified Developer – Associate',
        from: 'AWS',
        badge: 'Professional',
    },
    {
        img: gcdl,               // TODO: add image e.g. import techm from '../images/techm-cert.png'
        name: 'Google Cloud Digital Leader',
        from: 'Google',
        badge: 'Professional',
    },
        {
        img: bravo,               // TODO: add image e.g. import techm from '../images/techm-cert.png'
        name: 'Bravo Award',
        from: 'Tech Mahindra',
        badge: 'Recognization',
    },
    // ─── PROFESSIONAL CERTIFICATIONS ─────────────────────────────
    {
        img: jlv,               // TODO: add image e.g. import techm from '../images/techm-cert.png'
        name: 'IT Freshers Java L1 V1',
        from: 'Tech Mahindra',
        badge: 'Professional',
    },
    {
        img: kodnest,               // TODO: add image
        name: 'Java Full Stack Development',
        from: 'KodNest Technologies',
        badge: 'Internship',
    },
    {
        img: excelr,               // TODO: add image
        name: 'Full Stack Java Developer Course',
        from: 'ExcelR Edtech Pvt Ltd',
        badge: 'Internship',
    },

    {
        img: Html_css_js,
        name: 'HTML, CSS, and Javascript for Web Developers',
        from: 'Johns Hopkins University · Coursera',
        badge: null,
    },
    {
        img: web_dev,
        name: "A Beginner's Guide to Web Development",
        from: 'Infosys Springboard',
        badge: null,
    },
    {
        img: github,
        name: 'Getting Started with Git and GitHub',
        from: 'IBM · Coursera',
        badge: null,
    },
   
];

const PLACEHOLDER_BG = '#1a0030';

export default function Certificates() {
    const [products, setProducts] = useState([]);

    const responsiveOptions = [
        { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
        { breakpoint: '991px',  numVisible: 2, numScroll: 1 },
        { breakpoint: '767px',  numVisible: 1, numScroll: 1 },
    ];

    useEffect(() => {
        setProducts(allCertificates);
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="custom-product-item p-shadow-4">
                {product.badge && (
                    <div className="cert-badge">{product.badge}</div>
                )}
                <div className="custom-product-image">
                    {product.img ? (
                        <img src={product.img} alt={product.name} className="custom-img" />
                    ) : (
                        <div className="cert-placeholder" style={{ background: PLACEHOLDER_BG }}>
                            <span>{product.from.charAt(0)}</span>
                            <p>Certificate image coming soon</p>
                        </div>
                    )}
                </div>
                <div className="custom-product-details">
                    <h4 className="custom-heading">{product.name}</h4>
                    <h6 className="custom-price">{product.from}</h6>
                </div>
            </div>
        );
    };

    return (
        <section className="portfolio-card" id="certificates">
            <h1 className="heading heading-card">My <span>Certificates</span></h1>
            <Carousel
                value={products}
                numScroll={1}
                numVisible={3}
                responsiveOptions={responsiveOptions}
                itemTemplate={productTemplate}
            />
        </section>
    );
}