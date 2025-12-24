export default function Footer() {
  return (
    <footer className="bg-[#2a2a2a] text-[#bdbdbd]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#9a9a9a] mb-6">
              Concrete Solutions
            </h3>
            <ul className="space-y-4 text-sm text-[#bdbdbd]">
              <li className="flex items-start gap-3">
                <span aria-hidden="true" className="text-[#bdbdbd]">
                  📍
                </span>
                <span>
                  150 Engineers Drive
                  <br />
                  Hicksville, NY 11801
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span aria-hidden="true" className="text-[#bdbdbd]">
                  📞
                </span>
                <span>631.393.6520</span>
              </li>
              <li className="flex items-center gap-3">
                <span aria-hidden="true" className="text-[#bdbdbd]">
                  📠
                </span>
                <span>631.393.6522</span>
              </li>
              <li className="flex items-center gap-3">
                <span aria-hidden="true" className="text-[#bdbdbd]">
                  f
                </span>
                <span>Follow Us on Facebook</span>
              </li>
              <li className="flex items-center gap-3">
                <span aria-hidden="true" className="text-[#bdbdbd]">
                  ◎
                </span>
                <span>Follow Us on Instagram</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#9a9a9a] mb-6">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm text-[#bdbdbd]">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#9a9a9a] mb-6">
              Certifications
            </h3>
            <ul className="space-y-3 text-sm text-[#bdbdbd]">
              <li>NYCDOB Concrete Testing and Mix Designs (No.96)</li>
              <li>NYCDOB Special Inspection Agency (SIA No. 5344)</li>
              <li>A2LA Accredited (Assessment No. 3785)</li>
              <li>AASHTO Accredited</li>
              <li>NYCDDC</li>
              <li>NYCSCA</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#9a9a9a] mb-6">
              Proud Member Of
            </h3>
            <ul className="space-y-3 text-sm text-[#bdbdbd] mb-8">
              <li>Concrete Industry Board of NYC (CIB)</li>
              <li>Long Island Builders Institute (LIBI)</li>
              <li>National Association of Home Builders (NAHB)</li>
            </ul>
            <div className="h-12 w-24 bg-[#3a3a3a] rounded flex items-center justify-center text-xs text-[#9a9a9a]">
              A2LA
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#333333] bg-[#242424]">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-xs text-[#8a8a8a]">
          © 2021 Concrete Solutions Lab. | Sitemap | Long Island SEO by Active
          Web Group
        </div>
      </div>
    </footer>
  );
}
