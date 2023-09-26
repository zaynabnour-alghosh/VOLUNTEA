import React from "react";
import './style.css';
import RowCard from "../../common/rowcard";
import { useEffect ,useState} from "react";
import { sendRequest } from "../../../../config/request";

import orgLogo from '../../../../images/org-logo.png';
const Info=({orgId,setJoinedAt})=>{
    const [orgInfo, setOrgInfo] = useState(null);
    const [certs, setCerts] = useState([]);
    
    useEffect(() => {
        const id=localStorage.getItem("organizationId");
        const getOrg = async () => {
			try {
				const response = await sendRequest({
                method:"GET",
                route: `volunteer/dashboard-home/${id}`,
                body:" ",
                })
                
			if (response) {
                console.log(response);
                setOrgInfo(response);
                setCerts(response.badges);
                setJoinedAt(response.joined);
			}
			} catch (error) {
				console.log(error);
			}
		} 
        getOrg();
    }, []);
    
    return(
        <div className="vol-org-info flex fullwidth wrap">
            <div className="vol-org-info-container fullwidth flex column">
                <div className="base-org-info  flex wrap column pt-20 fullwidth">
                    <div><h3>Organization Details</h3></div>
                    <hr/>
                    <div className="vol-org-info-form flex row gap-30 fullwidth spaceBetween">
                        <div className="org-info-logo">
                            <img src={orgInfo? `http://localhost:8000/storage/images/organizations/${ orgInfo.logo}`:'logo'} alt="logo" />
                        </div>
                        <div className="flex-column-gap-20">
                            <div className="info-row flex-column gap-10 fullwidth">
                                <span>Organization</span>
                                <div>{orgInfo?.name}</div>
                            </div>
                            <div className="info-row flex-column fullwidth">
                                <span>Description</span>
                                <div>
                                    <p>
                                    {orgInfo?.description}
                                    </p>
                                </div>
                            </div>
                            <div className="info-row flex-column fullwidth">
                                <span>Information</span>
                                <div className="flex column">
                                    <p>{orgInfo?.location}</p>
                                    <p>{orgInfo?.phone}</p>
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
                    {certs?.map((cert, index) => (
                        <div key={index}>
                            <RowCard 
                            // notice={cert.admin}
                            title={cert.topic}
                            desc={cert.content}
                            date={cert.issued}
                            isCertification={true}
                            />
                        </div>
                    ))}     
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Info;