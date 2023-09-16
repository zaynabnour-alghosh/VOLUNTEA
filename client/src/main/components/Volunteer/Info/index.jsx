import React from "react";
import './style.css';
import RowCard from "../../common/rowcard";
import orgLogo from '../../../../images/org-logo.png';
const Info=()=>{
    return(
        <div className="vol-org-info flex fullwidth wrap">
            <div className="vol-org-info-container fullwidth flex column">
                <div className="base-org-info  flex wrap column pt-20 fullwidth">
                    <div><h3>Organization Details</h3></div>
                    <hr/>
                    <div className="vol-org-info-form flex row gap-30 fullwidth spaceBetween">
                        <div className="org-info-logo">
                            <img src={orgLogo} alt="logo" />
                        </div>
                        <div className="flex-column-gap-20">
                            <div className="info-row flex-column gap-10 fullwidth">
                                <span>Organization</span>
                                <div>CLEAN EARTH INITIATIVE</div>
                            </div>
                            <div className="info-row flex-column fullwidth">
                                <span>Description</span>
                                <div>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Etiam et luctus orci, vitae maximus enim. 
                                    Proin facilisis in libero vitae mattis. 
                                    Donec feugiat quam nunc, ut vehicula lectus congue a.
                                    </p>
                                </div>
                            </div>
                            <div className="info-row flex-column fullwidth">
                                <span>Information</span>
                                <div className="flex column">
                                    <p>Centralized Education Initiative (CEI)</p>
                                    <p>123 Main Street</p>
                                    <p>Lebanon</p>
                                </div>
                            </div>
                            <div className="info-row flex fullwidth">
                                <p>
                                For any inquiries, questions, or feedback, please don't hesitate to reach out to us. 
                                Our team is here to assist you and provide the information and support you need. 
                                You can also connect with us on our Facebook page for updates, news, and community engagement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="base-org-info  flex wrap column pt-20 fullwidth">
                    <div><h3>Certifications</h3></div>
                    <hr/>
                    <div className="vol-certification-info-form flex center row gap-30 p-20">
                        <RowCard 
                            title={"Opportunity Name"}
                            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et luctus orci, vitae maximus enim. Proin facilisis in libero vitae mattis"}
                            notice={"Issued by: Admin Name"}
                            date={"Jan 1st, 2022"}
                            isCertification={true}
                        />
                        <RowCard 
                            title={"Opportunity Name"}
                            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et luctus orci, vitae maximus enim. Proin facilisis in libero vitae mattis"}
                            notice={"Issued by: Admin Name"}
                            date={"Jan 1st, 2022"}
                            isCertification={true}
                        />
                        <RowCard 
                            title={"Opportunity Name"}
                            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et luctus orci, vitae maximus enim. Proin facilisis in libero vitae mattis"}
                            notice={"Issued by: Admin Name"}
                            date={"Jan 1st, 2022"}
                            isCertification={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Info;