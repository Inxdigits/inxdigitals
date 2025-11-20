import React, { useState } from "react";
import "../Footer/Footer.css";
import logo from "../../assets/INX_DIGITAL_LOGO_DESIGN0.png";
import instagram from "../Images/instagram-fill.png";
import x from "../Images/prime_twitter.png";
import facebook from "../Images/uil_facebook.png";
import linkedin from "../Images/mdi_linkedin.png";

const Footer = () => {
  const [openTerms, setOpenTerms] = useState(false);

  return (
    <>
      <div className="footer-container">
        <div className="top">
          <div className="logo">
            <img src={logo} alt="" className="logo-img" />{" "}
            <span className="rc-number">RC: 8193592</span>
          </div>
          <div className="socials">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/inxdigitalsltd/"
            >
              <img src={instagram} alt="" className="ig social-icon" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/inxdigitalsltd"
            >
              <img src={x} alt="" className="twitter social-icon" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/inxdigitals/"
            >
              <img src={facebook} alt="" className="fb social-icon" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/inxdigitals/?viewAsMember=true"
            >
              <img src={linkedin} alt="" className="linkedin social-icon" />
            </a>
          </div>
        </div>

        <div className="border-line"></div>

        <div className="copyright">
          <div className="reach-us">
            <p className="address">
              Contact address: 4, SEGILOLA STREET, AGEGE, LAGOS STATE, NIGERIA
            </p>
            <p className="numbers">
              Phone & WhatsApp:{" "}
              <a href="tel:+2348109511164">+234 810 951 1164</a>
            </p>
          </div>

          {/* NEW: Terms of Service link */}
          <p
            style={{
              cursor: "pointer",
              textDecoration: "underline",
              textAlign: "left",
            }}
            onClick={() => setOpenTerms(true)}
          >
            Terms of Service & Refund Policy
          </p>

          <span>© 2025 . All Rights Reserved by INX DIGITALS LTD.</span>
          <br />
          <br />
        </div>
      </div>

      {/* MODAL */}
      {openTerms && (
        <div className="tos-backdrop" onClick={() => setOpenTerms(false)}>
          <div
            className="tos-modal"
            onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
          >
            <button className="close-btn" onClick={() => setOpenTerms(false)}>
              ✕
            </button>

            <h2>INX Digitals Ltd — Refund & Cancellation Policy</h2>
            <div className="tos-content">
              <p>
                At INX Digitals Ltd, we are committed to delivering high-quality
                digital services and ensuring client satisfaction. This Refund &
                Cancellation Policy outlines the terms under which refunds,
                cancellations, and project adjustments may be granted.
              </p>
              <ol>
                <li>
                  Project Deposits
                  <ul>
                    <li>
                      All projects require an upfront or full deposit depending
                      on nature of project to be carried out.
                    </li>
                    <li>
                      Deposits are non-refundable, as they cover initial
                      consultations, planning, resource allocation, and
                      administrative costs.{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  Refund Eligibility
                  <br />
                  <span>
                    Refunds may be considered under the following conditions:
                  </span>
                  <ul>
                    <li>
                      No Work Initiated: If INX Digitals Ltd has not yet
                      commenced any work on the project, the client may request
                      a partial refund (excluding the non-refundable deposit).
                    </li>
                    <li>
                      INX Digitals Ltd Unable to Deliver: If due to internal
                      limitations INX Digitals Ltd is unable to execute the
                      project after payment, the client will receive a full
                      refund, including the deposit.
                    </li>
                  </ul>
                </li>
                <li>
                  Non-Refundable Situations
                  <br />
                  <span>
                    Refunds will not be granted in the following cases:
                  </span>
                  <ul>
                    <li>Client changes their mind after work has begun.</li>
                    <li>
                      Project delays caused by the client (late feedback,
                      incomplete materials, unresponsive communication).
                    </li>
                    <li>
                      Client requests additional features outside the agreed
                      scope.
                    </li>
                    <li>
                      Client fails to provide required materials within the
                      agreed time frame.
                    </li>
                    <li>
                      Work has already been completed or substantially completed
                      as per the scope of work.
                    </li>
                  </ul>
                </li>
                <li>
                  Cancellation Requests
                  <ul>
                    <li>
                      All cancellation requests must be submitted in writing to
                      admin@inxdigitals.com.
                    </li>
                    <li>
                      Upon cancellation, all completed work to date will be
                      delivered to the client, and any outstanding balance for
                      work already completed will still be payable but refund
                      for payment already made will not be carried out
                    </li>
                  </ul>
                </li>
                <li>
                  Service-Specific Refund Terms
                  <ul>
                    <li>
                      Website Development & Design
                      <br />- Once project is started, refunds are no longer
                      applicable.
                    </li>
                    <li>
                      Branding & Graphic Design :All concept development fees
                      are non-refundable.
                    </li>
                    <li>
                      Digital Marketing :Marketing retainers, ads management,
                      and monthly subscriptions are non-refundable once the
                      cycle begins.
                    </li>
                    <li>
                      Consultation Services :Consultation fees are fully
                      non-refundable once the session is started.
                    </li>
                  </ul>
                </li>
                <li>
                  Timelines for Refund Processing
                  <br /> Approved refunds will be processed within 7–14 business
                  days via the original payment method unless otherwise agreed.
                </li>
                <li>
                  Dispute Resolution
                  <br />
                  If any disagreement arises concerning the refund process, both
                  parties agree to resolve the issue through communication and
                  mediation before considering legal action.
                </li>
                <li>
                  Acceptance of Policy By making payment for a service with INX
                  Digitals Ltd, the client acknowledges and agrees to the terms
                  of this Refund & Cancellation Policy.
                </li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
