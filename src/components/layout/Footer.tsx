import { memo } from "react";
import { siteInfo } from "@/data/navigation";

const Footer = memo(() => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6 py-6">
        <p className="text-muted-foreground text-sm text-center">
          {siteInfo.copyright}
        </p>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
