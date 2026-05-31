"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <main style={{ fontFamily: "Inter, Arial", background: "#fff" }}>

      {/* NAVBAR */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 60px",
        borderBottom: "1px solid #eee",
        position: "sticky",
        top: 0,
        background: "white",
        zIndex: 10
      }}>
        <h2 style={{ letterSpacing: "2px" }}>
          DAGAR CONSULTANCY
        </h2>

        <nav style={{ display: "flex", gap: "30px", fontSize: "14px" }}>
          <a href="/">Home</a>
          <a href="/team">Team</a>
        </nav>
      </header>

      {/* HERO */}
      <section style={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "#0b1220",
        color: "white",
        padding: "40px"
      }}>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 1 }}
          style={{ fontSize: "70px", fontWeight: "700" }}
        >
          DAGAR CONSULTANCY
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3, duration: 1 }}
          style={{ fontSize: "18px", marginTop: "20px", color: "#cbd5e1" }}
        >
          Accounting • Tax • Audit • Advisory Services in UAE
        </motion.p>

      </section>

      {/* SERVICES */}
      <section style={{ padding: "120px 60px" }}>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "40px",
            textAlign: "center",
            marginBottom: "60px"
          }}
        >
          Our Services
        </motion.h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px"
        }}>

          {[
            "Accounting & Bookkeeping",
            "Tax Consultancy (UAE VAT & Corporate Tax)",
            "Audit & Assurance",
            "Business Advisory"
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              style={{
                padding: "30px",
                border: "1px solid #eee",
                borderRadius: "12px",
                background: "#fafafa",
                cursor: "pointer"
              }}
            >
              {item}
            </motion.div>
          ))}

        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "40px",
        textAlign: "center",
        borderTop: "1px solid #eee",
        fontSize: "14px",
        color: "gray"
      }}>
        © 2026 DAGAR CONSULTANCY
      </footer>

    </main>
  );
}