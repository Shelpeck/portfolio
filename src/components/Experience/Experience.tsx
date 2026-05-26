import LinkButton, { LinkButtonType } from "../LinkButton/LinkButton";

const Experience = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12" id="Experience">

      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-12">
        <h2 className="text-4xl font-extrabold tracking-tight from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Work Experience
        </h2>
        <p className="text-slate-400 text-base">
          Professional timeline, software engineering roles, and production systems architecture.
        </p>
      </div>

      {/* Main Vertical Timeline Wire */}
      <div className="flex flex-col gap-12 border-l-2 border-slate-800 pl-6 md:pl-8 ml-2">

        {/* ==================== ROLE 1: JAIYQDEV ==================== */}
        <div className="relative flex flex-col gap-3">
          {/* Timeline bullet node */}
          <div className="absolute -left-7.75 md:-left-9.75 top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-950" />

          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Full-Stack / Lead Mobile Developer
            </h3>
            <span className="text-sm font-semibold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full w-fit whitespace-nowrap">
              Nov 2022 – Dec 2026
            </span>
          </div>

          <p className="text-md font-medium text-slate-300">
            JaiyqDev — <span className="text-slate-400 italic">Uralsk, Kazakhstan</span>
          </p>

          {/* Sub-Project Card: 2Clicks */}
          <div className="mt-4 bg-slate-900/40 border border-slate-800/60 rounded-xl p-5 md:p-6 backdrop-blur-sm">
            <h4 className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
              2Clicks Ecosystem
            </h4>
            <div className="flex flex-row gap-2">
              <LinkButton variant={LinkButtonType.web} href="https://2clicks.ng" />
              <LinkButton variant={LinkButtonType.android} href="https://play.google.com/store/apps/details?id=com.app2click" />
              <LinkButton variant={LinkButtonType.ios} href="https://apps.apple.com/us/app/2clicks-nigeria/id6755455540" />
            </div>
            <ul className="list-disc list-outside ml-4 flex flex-col gap-3 text-slate-400 text-sm leading-relaxed">
              <li>
                <strong className="text-slate-200">Founding Lead Developer (Zero-to-One):</strong> Spearheaded the end-to-end architecture and deployment of the 2Clicks ecosystem across Web, iOS, and Android, establishing robust CI/CD pipelines and modular codebases from scratch.
              </li>
              <li>
                <strong className="text-slate-200">Framework Migration & SEO Optimization:</strong> Architected the transition of a legacy SPA to Next.js (App Router), leveraging Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR) to deliver a 40% improvement in First Contentful Paint (FCP) and vastly improve SEO rankings.
              </li>
              <li>
                <strong className="text-slate-200">Performance Engineering:</strong> Achieved sub-second page loads and optimized Core Web Vitals via advanced code-splitting, lazy-loading, and bundle analysis to drastically minimize JavaScript payloads and Time to Interactive (TTI).
              </li>
              <li>
                <strong className="text-slate-200">Native Bridge Customization:</strong> Patched the underlying native layer of the <code className="text-indigo-300 bg-slate-950 px-1.5 py-0.5 rounded text-xs">react-native-fast-image</code> Android library, overriding asset decoding parameters to eliminate compression artifacts and guarantee crisp, high-resolution visual parity with iOS.
              </li>
              <li>
                <strong className="text-slate-200">State & API Architecture:</strong> Designed a highly scalable REST API architecture using Axios and Redux Toolkit, streamlining global state management and reducing data-fetching boilerplate code by over 10%.
              </li>
              <li>
                <strong className="text-slate-200">Complex Feature Integrations:</strong> Orchestrated integrations for Maplibre custom mapping, Paystack multi-platform payments, secure OAuth flows (Google, Apple, Facebook), and Meta Ad Manager tracking APIs.
              </li>
              <li>
                <strong className="text-slate-200">Advanced Interactive UIs:</strong> Engineered a reusable component library featuring real-time notification architectures, interactive drag-and-drop dashboards, and native hardware bindings (Camera/Image processing).
              </li>
              <li>
                <strong className="text-slate-200">Deeplinking and Notifications:</strong> Engineered a comprehensive push notification ecosystem using Firebase (FCM) and Notifee, mapping payload configurations to React Navigation deep links to drop users directly into active order monitoring views.
              </li>
            </ul>
          </div>

          {/* Sub-Project Card: ReFreshly */}
          <div className="mt-4 bg-slate-900/40 border border-slate-800/60 rounded-xl p-5 md:p-6 backdrop-blur-sm">
            <h4 className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
              ReFreshly Project
            </h4>

            <div className="flex flex-row gap-2">
              <LinkButton variant={LinkButtonType.android} href="https://play.google.com/store/apps/details?id=com.refreshly&hl=en" />
            </div>
            <ul className="list-disc list-outside ml-4 flex flex-col gap-3 text-slate-400 text-sm leading-relaxed">
              <li>
                <strong className="text-slate-200">Product Launch (Zero-to-One):</strong> Led the greenfield development of the ReFreshly Android application, translating high-fidelity design layouts into a pixel-perfect user interface backed by a highly maintainable, scalable infrastructure.
              </li>
              <li>
                <strong className="text-slate-200">Real-Time Data Streaming:</strong> Integrated bi-directional WebSocket pipelines using <code className="text-indigo-300 bg-slate-950 px-1.5 py-0.5 rounded text-xs">Socket.io</code> to provide immediate, low-latency background order tracking and instant order status updates for users.
              </li>
              <li>
                <strong className="text-slate-200">Quality Assurance & Testing Frameworks:</strong> Engineered a comprehensive end-to-end (E2E) automation testing suite using Detox, heavily elevating deployment confidence and preserving the regression-free stability of critical user-facing flows.
              </li>
              <li>
                <strong className="text-slate-200">Ecosystem & Payment Gateways:</strong> Managed deeply coupled integrations including Google Maps SDK, secure multi-platform OAuth credentials, and TipTopPay for encrypted, native payment processing pipelines.
              </li>
              <li>
                <strong className="text-slate-200">Internationalization (i18n):</strong> Implemented global-ready localization modules using <code className="text-indigo-300 bg-slate-950 px-1.5 py-0.5 rounded text-xs">i18next</code> to manage dynamic, multi-language content rendering without disrupting core application runtime performance.
              </li>
            </ul>
          </div>
        </div>

        {/* ==================== ROLE 2: CORE ENTERPRISE LAYER ==================== */}
        <div className="relative flex flex-col gap-3 mt-4">
          {/* Timeline bullet node */}
          <div className="absolute -left-7.75 md:-left-9.75 top-1.5 w-4 h-4 rounded-full bg-slate-700 border-4 border-slate-950" />

          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Software Engineer
            </h3>
          </div>

          <ul className="list-disc list-outside ml-4 flex flex-col gap-3 text-slate-400 text-sm leading-relaxed mt-2">
            <li>
              <strong className="text-slate-200">Agile Team Collaboration:</strong> Maintained 100% compliance with strict UI/UX design parameters across fast-paced Agile development cycles, delivering production-ready features for enterprise-grade applications.
            </li>
            <li>
              <strong className="text-slate-200">Native iOS Optimization:</strong> Engineered and refactored highly complex, iOS-specific mobile components via custom native-bridge layers to eliminate rendering bottlenecks and fix standard lifecycle memory leaks.
            </li>
            <li>
              <strong className="text-slate-200">Engineering Quality & Mentorship:</strong> Enforced high code health benchmarks across teams by facilitating structured code reviews, authoring comprehensive documentation, and mentoring junior engineers on clean architectural principles.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Experience;