import React from 'react';
import { FaGavel, FaUserShield, FaFileContract, FaUserPlus } from 'react-icons/fa';
import FullScreenLoader from '../../components/common/FullScreenLoader';
// RPI Computer Club — Legal Pages (Code of Conduct, Terms & Conditions, Privacy Policy, Membership Agreement)
// Built with Tailwind CSS + DaisyUI + react-icons
// Usage: import <RpiLegalPages /> and mount in your router or page layout.

const SectionTitle = ({ icon, title, subtitle }) => (
  <div className="flex items-start gap-4">
    <div className="text-3xl p-3 rounded-xl bg-sky-100 text-sky-700">
      {icon}
    </div>
    <div>
      <h2 className="text-2xl font-semibold">{title}</h2>
      {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
    </div>
  </div>
);

const Clause = ({ num, title, children }) => (
  <div className="mb-4">
    <h3 className="font-semibold">{num}. {title}</h3>
    <div className="pl-4 text-sm text-slate-700 mt-1">{children}</div>
  </div>
);

export function CodeOfConduct() {
  return (
    <div className="prose max-w-none">
      <SectionTitle icon={<FaUserShield />} title="Code of Conduct" subtitle="Standards that keep RPI Computer Club inclusive, safe and productive." />

      <div className="mt-6 space-y-4">
        <p>
          The RPI Computer Club expects all members, volunteers, guests, and organizers to follow the behaviour standards
          described below. These standards are adapted from the club constitution and are intended to maintain a respectful,
          harassment-free community for everyone.
        </p>

        <Clause num="1" title="Scope">
          This Code applies to all club-run events (online and offline), communication channels (email, chat, social media),
          projects, and interactions between members and external partners.
        </Clause>

        <Clause num="2" title="Respectful Interaction">
          Treat members, faculty, guests and partners with courtesy. Harassment, hateful speech, demeaning comments, threats,
          or discriminatory behaviour are strictly prohibited.
        </Clause>

        <Clause num="3" title="No Politics & No Hate">
          Political campaigning within club resources or events is not allowed. Content or behaviour promoting hatred based on
          religion, gender, race, ethnicity, sexual orientation, disability, or other protected characteristics is forbidden.
        </Clause>

        <Clause num="4" title="Professionalism & Academic Integrity">
          Members must respect intellectual property and copyright laws. Plagiarism, piracy, and using unlicensed material
          in club projects are prohibited.
        </Clause>

        <Clause num="5" title="Privacy & Data Handling">
          Do not share other members' personal information without consent. Sensitive data from projects must be handled
          according to the Privacy Policy and institutional rules.
        </Clause>

        <Clause num="6" title="Conflict Resolution & Reporting">
          If a member feels harmed or observes misconduct, they should report via the club's official channels. The Executive
          Council and Evaluation Committee will investigate; provisional measures (warnings, temporary suspension) may be
          applied pending investigation.
        </Clause>

        <Clause num="7" title="Sanctions">
          Violations may result in: verbal warnings, written warnings, temporary suspension of membership and privileges, or
          permanent expulsion for repeated or severe offences. Financial or legal misconduct will be escalated to college
          authorities when required.
        </Clause>

        <p className="text-sm text-slate-500">
          These rules are aligned with the main constitution of the club and can be updated by the Executive Council following
          the amendment procedure defined in the constitution.
        </p>
      </div>
    </div>
  );
}

export function TermsAndConditions() {
  return (
    <div className="prose max-w-none">
      <SectionTitle icon={<FaGavel />} title="Terms & Conditions" subtitle="Legal terms for use of the club website, resources and membership." />

      <div className="mt-6 space-y-4">
        <p>
          These Terms & Conditions ("Terms") govern access to and use of RPI Computer Club online resources (website, apps,
          social media, forums), and participation in club activities. By using club resources or registering as a member you
          agree to be bound by these Terms.
        </p>

        <Clause num="1" title="Use of Website and Resources">
          The club grants a limited, non-exclusive license to use content for personal, educational and non-commercial purposes.
          Commercial re-use requires prior written permission from the Executive Council.
        </Clause>

        <Clause num="2" title="User Accounts & Membership">
          Members must provide accurate information during registration. Membership is subject to approval as defined in the
          constitution. The club reserves the right to refuse, suspend, or terminate accounts for breach of Terms or Code of Conduct.
        </Clause>

        <Clause num="3" title="Content Ownership & Copyright">
          Unless otherwise specified, content published by the club is owned by the club. Contributions from members can be
          licensed under a permissive license (MIT/CC-BY) by mutual agreement — contributors should note copyright and license
          preferences when submitting work.
        </Clause>

        <Clause num="4" title="Liability Disclaimer">
          The club is not liable for direct or indirect damages arising from the use of website content, third-party tools, or
          participation in events, except to the extent required by law. Members are responsible for backing up their own data.
        </Clause>

        <Clause num="5" title="Third-Party Links and Services">
          The website may include links to external services. These are provided for convenience; the club is not responsible for
          third-party content or privacy practices.
        </Clause>

        <Clause num="6" title="Amendments">
          The Executive Council may update these Terms. Material changes will be announced via official channels. Continued use
          after notice constitutes acceptance of updated Terms.
        </Clause>

        <Clause num="7" title="Governing Law">
          These Terms are governed by applicable laws and regulations of the institute and country. Legal disputes will be
          addressed by the appropriate institutional bodies when necessary.
        </Clause>
      </div>
    </div>
  );
}

export function PrivacyPolicy() {
  return (
    <div className="prose max-w-none">
      <SectionTitle icon={<FaFileContract />} title="Privacy Policy" subtitle="How the club collects, uses and protects personal data." />

      <div className="mt-6 space-y-4">
        <p>
          RPI Computer Club respects members' privacy. This policy describes what personal data we collect, why we collect it,
          how it's used, stored and shared, and members' rights.
        </p>

        <Clause num="1" title="Data Collected">
          We collect: name, email, phone (optional), department/year, membership status, event registrations, and project
          contributions. Collection is limited to what is necessary for club operations.
        </Clause>

        <Clause num="2" title="Purpose of Processing">
          Data is used to manage membership, communicate event information, process registrations, run competitions, publish
          consented highlights (e.g., project showcases), and comply with institutional reporting.
        </Clause>

        <Clause num="3" title="Storage & Security">
          Personal data is stored on college-approved systems or club-managed secure services. Access is limited to authorized
          officers. We use reasonable technical and organizational safeguards to protect data.
        </Clause>

        <Clause num="4" title="Sharing & Disclosure">
          We do not sell personal data. Data may be shared with college administration, event partners, or sponsors when
          necessary and with appropriate safeguards. Public-facing content uses only consented information.
        </Clause>

        <Clause num="5" title="Retention & Deletion">
          Data is retained only as long as necessary for club purposes or as required by law. Members may request deletion of
          non-essential personal data; some records (financial, audit) may be retained for statutory periods.
        </Clause>

        <Clause num="6" title="Member Rights">
          Members can access, correct, or request deletion of their personal data by contacting the Data Officer (Treasurer or
          Official Secretary). Requests will be processed within a reasonable timeframe.
        </Clause>

        <Clause num="7" title="Contact & Complaints">
          For privacy questions or complaints, members should contact the Executive Council. If unresolved, complaints can be
          escalated to the college authority as described in the constitution.
        </Clause>
      </div>
    </div>
  );
}

export function MembershipAgreement() {
  return (
    <div className="prose max-w-none">
      <SectionTitle icon={<FaUserPlus />} title="Membership Agreement" subtitle="Terms for becoming and remaining a member of the club." />

      <div className="mt-6 space-y-4">
        <p>
          By applying for membership in the RPI Computer Club, applicants accept the conditions below. This agreement sits
          alongside the constitution and club rules.
        </p>

        <Clause num="1" title="Eligibility">
          Students of the Computer Science &amp; Technology department (or as defined by the constitution) who meet the
          application requirements may apply. Membership approval follows the constitution's process (application, viva,
          minimum score requirement, Executive Council endorsement).
        </Clause>

        <Clause num="2" title="Fees & Financials">
          Members agree to timely payment of any dues (monthly/annual) set by the Executive Council. Funds are used for club
          activities and accounted for according to the financial policy.
        </Clause>

        <Clause num="3" title="Commitment & Participation">
          Members should attend meetings, contribute to squad responsibilities, and uphold the Code of Conduct. Repeated
          non-participation may affect membership status.
        </Clause>

        <Clause num="4" title="Intellectual Property">
          Members agree that club projects produced with significant club resources may be governed by a license chosen by the
          Publications Secretary in coordination with contributors. Attribution is expected for member contributions.
        </Clause>

        <Clause num="5" title="Termination of Membership">
          Membership may be revoked for misconduct as per the disciplinary process in the constitution. Members may also
          voluntarily resign; financial and administrative obligations prior to resignation must be fulfilled.
        </Clause>
      </div>
    </div>
  );
}

export default function RpiLegalPages() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <aside className="col-span-1">
          <div className="card shadow-sm p-4 sticky top-6">
            <h4 className="font-bold mb-2">Legal Pages</h4>
            <div className="tabs flex-col">
              <a href="#code-of-conduct" className="tab tab-lifted">Code of Conduct</a>
              <a href="#terms" className="tab tab-lifted">Terms & Conditions</a>
              <a href="#privacy" className="tab tab-lifted">Privacy Policy</a>
              <a href="#membership" className="tab tab-lifted">Membership Agreement</a>
            </div>
          </div>
        </aside>

        <main className="col-span-3 space-y-8">
          <section id="code-of-conduct" className="card p-6">
            <CodeOfConduct />
          </section>

          <section id="terms" className="card p-6">
            <TermsAndConditions />
          </section>

          <section id="privacy" className="card p-6">
            <PrivacyPolicy />
          </section>

          <section id="membership" className="card p-6">
            <MembershipAgreement />
          </section>

          <footer className="text-sm text-slate-500">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>These pages reflect the club's constitution and are intended as a starting point. For legal validation consult
               your institution's legal office or an advisor.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
