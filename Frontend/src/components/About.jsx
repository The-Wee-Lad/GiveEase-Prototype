import React from "react";
import { Handshake, HeartHandshake } from "lucide-react";

const About = () => {
    return (
        <section className="py-12 px-4 bg-gray-100 text-gray-800 text-center">
            <div className="mb-12">
                <h2 className="text-3xl font-bold">
                    WHO <span className="text-red-600">WE ARE</span> ?
                </h2>
                <div className="flex items-center justify-center my-3">
                    <span className="w-10 border-b-2 border-red-600"></span>
                    <Handshake className="text-red-600 w-8 h-8 mx-2" />
                    <span className="w-10 border-b-2 border-red-600"></span>
                </div>
                <p className="text-lg max-w-2xl mx-auto">
                GiveEase, we are passionate about transforming the way people give and connect. Our platform is designed to make contributions simple, meaningful, and impactful. By combining innovative technology with a purpose-driven approach, we empower individuals and organizations to support causes that matter. We believe in fostering a culture of generosity, where every gesture—big or small—creates lasting change. With GiveEase, giving becomes more than an act; it becomes a powerful experience that strengthens communities and inspires kindness.
                </p>
            </div>

            <div>
                <h2 className="text-3xl font-bold">
                    OUR <span className="text-red-600">MISSION</span>
                </h2>
                <div className="flex items-center justify-center my-3">
                    <span className="w-10 border-b-2 border-red-600"></span>
                    <HeartHandshake className="text-red-600 w-8 h-8 mx-2" />
                    <span className="w-10 border-b-2 border-red-600"></span>
                </div>
                <p className="text-lg max-w-3xl mx-auto">
                At GiveEase, our mission is to simplify and enhance the act of giving by creating an intuitive, accessible, and impactful platform. We strive to empower individuals and organizations to contribute to meaningful causes effortlessly, fostering a culture of generosity and compassion. Our goal is to bridge the gap between those who want to give and the communities in need, ensuring every contribution makes a real difference. Through innovation and purpose-driven solutions, we aim to inspire kindness, strengthen communities, and drive positive, lasting change in the world.
                </p>
            </div>
        </section>
    );
};

export default About;
