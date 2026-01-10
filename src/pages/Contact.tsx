import { memo } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import SectionTitle from "@/components/shared/SectionTitle";
import Divider from "@/components/shared/Divider";
import { contactLinks } from "@/data/contact";
import { containerVariants, itemVariants, fadeInVariants } from "@/lib/animations";

const Contact = memo(() => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <PageHeader title="Contact" />

          {/* Contact Section */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            <SectionTitle title="Get in Touch" count={contactLinks.length} />
            <Divider className="mb-8" />

            {/* Contact Links */}
            <motion.div
              className="flex flex-col gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {contactLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-4 border-b border-border hover:border-foreground transition-colors duration-200"
                  variants={itemVariants}
                >
                  <div className="flex items-center gap-4">
                    <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                    <span className="text-lg font-medium text-foreground">{link.name}</span>
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                    {link.description}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
});

Contact.displayName = "Contact";

export default Contact;
