<template>
  <div class="content">
    <div class="titleTop backBlue">
      <i class="fi fi-rr-angle-left" @click="goback"></i>
      <h5>My Page</h5>
    </div>
    <b-tabs justified class="myTab">
        <b-tab title="Account" active>
           <div class="container"> 
                <div class="subTop">
                    <img src="../../public/img/login.png">
                    <div class="subTopTxt">
                        Hello,
                        <span class="idEmail">{{ idEmail }}</span><br>
                        <div class="smallTxt">To edit your account information, enter the changes and click OK.</div>
                    </div>
                </div>  
                <b-card bg-variant="white" text-variant="dark" class="basicCard" header="Change Password">
                        
                        <b-card-text>
                            <b-form class="accountEdit">
                                <b-form-input type="password" id="password" placeholder="Current Password" class="bottomMargin05"></b-form-input>
                                <b-form-input type="password" id="passwordNew" placeholder="New Password" class="bottomMargin1"></b-form-input>
                            </b-form>  
                            <b-button block variant="primary">O K</b-button>            
                        </b-card-text>
                        
                    </b-card> 
                </div><!--개인정보-->
        </b-tab>
        <b-tab title="List">
            <div class="container"> 
                <div class="subTop">
                    <img src="../../public/img/search.png">
                    <div class="subTopTxt">
                        Hello,
                        <span class="idEmail">{{ idEmail }}</span><br>
                        <div class="smallTxt">View your test results below.</div>
                    </div>
                </div>  
                <b-card bg-variant="white" text-variant="dark" class="basicCard" header="Test Results">
                        <b-card-text>
                            <ul class="testList">
                                <li><i class="fi fi-rr-calendar"></i> {{ examDate }} Results</li>
                                <li><i class="fi fi-rr-calendar"></i> {{ examDate }} Results</li>
                                <li><i class="fi fi-rr-calendar"></i> {{ examDate }} Results</li>
                                <li><i class="fi fi-rr-calendar"></i> {{ examDate }} Results</li>
                                <li><i class="fi fi-rr-calendar"></i> {{ examDate }} Results</li>
                            </ul>          
                        </b-card-text>
                        
                    </b-card> 
                </div><!--MY기록-->
        </b-tab>
        <b-tab title="Delete">
           <div class="container"> 
                <div class="subTop">
                    <img src="../../public/img/front-end.png">
                    <div class="subTopTxt">
                        Hello,
                        <span class="idEmail">{{ idEmail }}</span><br>
                        <div class="smallTxt">Deleting your account will permanently delete all your data and account information.</div>
                    </div>
                </div>  
                <b-card bg-variant="white" text-variant="dark" class="basicCard" header="Delete Account">
                       
                        <b-card-text>
                            <b-form class="accountDelete">
                                <b-form-input type="password" id="password" placeholder="Enter password" class="bottomMargin1"></b-form-input>
                            </b-form>  
                            <b-button block variant="primary">O K</b-button>            
                        </b-card-text>
                        
                    </b-card> 
                </div><!--회원탈퇴-->
        </b-tab>
        <b-tab title="Policy">
            <div class="container topMargin1 servicePolicy"> 
                <b-card bg-variant="white" text-variant="dark" class="basicCard" header="Terms of Use">
                    <b-card-text>
                        <div class="cardTxt">
                        These Terms of Service (“Terms”) constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Rex Urobiome (“we”, “us”, or “our”), concerning your access to and use of the Rex Urobiome. rexsw website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, “Rex Urobiome”). You agree that by accessing Rex Urobiome, you have read, understood and agreed to be bound by all of these Terms of Service. If you do not agree with all these Terms, then you are expressly prohibited from using Rex Urobiome, and you shall stop using immediately. We are committed protecting your privacy and security. This agreement only covers the usage of Rex Urobiome services. Please review our Privacy Policy for more detailed information related to your personal data.<br><br>

                        <div class="txtBold">1. Coverage and Usage of Rex Urobiome Services</div>
                        1.1. Rex Urobiome, designs products and tools that help you achieve your wellness goals and empower and inspire you to lead a more energized life. These Terms apply to your access and use of the Rex Urobiome Service, which is provided to you by Rexsoft, Inc. (“Rexsoft”). The “Rex Urobiome Service” consists of our devices including associated firmware, testing strips, applications, software, websites, APIs, products, and services (“Services”).
                        <br><br>
                        1.2. Rex Urobiome, designs products and tools that help you achieve your wellness goals. Healthy living and nutrition are found in your advice for making your goals. The advice given by Rex Urobiome is based on information from the user that he or she has given when registering or using the services, and from a data tells us some information about your health condition by analyzing your urine.
                        <br><br>
                        1.3. It is your responsibility to upload data according to the specified method. Rex Urobiome is not responsible for any misleading advice or damage that may result from "expired data", "damaged data", or "wrong data".
                        <br><br>
                        1.4. Rex Urobiome, can not be held liable for incorrect advice given as a result of incorrect data resulting from the on which you use Rex Urobiome services.
                        <br><br>
                        1.5. Rex Urobiome provides the Website, Application, and Services for informational purposes only. Rex Urobiome Websites, Application, and Services does not contain or constitute, and should not be interpreted as medical advice or opinion.
                        <br><br>
                        1.6. Rex Urobiome is not a medical professional, and Rex Urobiome does not provide medical services or render medical advice.
                        <br><br>
                        1.7. Rex Urobiome services are not a substitute for the advice of a medical practitioner, and the information made available on or through the websites, applications and services should not be relied upon when making medical decisions, diagnose or treating a medical or health condition. 
                        <br><br>
                        1.8. Consult your doctor if you need a medical consultation or service. Using a website, application, or service does not create a pseudo-patient relationship between you and Rex Urobiome. It is not recommended to show advice and results to professional or medical staff.
                        <br><br>
                        1.9. Under no circumstances will Rex Urobiome be responsible for any loss or damage resulting from your reliance on the predicting disease risk information. Information on Rex Urobiome Services may not be reproduced, reproduced, copied, modified, sold, resold, distributed, visited or otherwise used for any commercial purpose without the express written consent of Rex Urobiome.
                        <br><br>
                        1.10. Rex Urobiome is based solely on information users register with Rex Urobiome services. We cannot predict the information users have not given us. Rex Urobiome cannot be held liable for damages resulting from advice given by Rex Urobiome Services due to information users do not notify Rex Urobiome (such as allergy, food intolerance, genetic or other illness, etc.). This is also applicable in the case for allergies and diseases that are not known to the users themselves.
                        <br><br>
                        1.11. In addition to all other limitations and disclaimers in this agreement, Rex Urobiome disclaims any liability or loss in connection with the provided on the services.
                        <br><br>
                        1.12. Accessing and using all or some of Rex Urobiome’s services may require some different policies, standards or guidelines, or you may need to accept additional terms and conditions. Unless otherwise stated, in the event of a dispute between these Terms of Service and any other policies, standards or guidelines required for a particular area, the policies, standards or guidelines necessary for the particular domain shall prevail.
                        <br><br>
                        <div class="txtBold">2. Change of Terms of Service </div>
                        2.1. Rex Urobiome reserves the right to amend this Terms of Service at any time in accordance with this Terms of Service. If we make changes to this Terms of Service, we will update the “Last Update Date” of this Terms. We will notify you by email or any other communication channels at least thirty (30) days before the date on which the amendments entered into force. If you do not agree to the change of Terms of Service, you may terminate this Terms of Service immediately by discontinuing the use of our Services. In the notification email, we will inform you of your right to terminate the Terms. You will not be able to terminate your contract prior to the date on which the amended Terms will enter into force, and your continued access to or use of the Rex Urobiome Services after amended Terms of Service update will mean that you accept the amended Terms.
                        <br><br>
                        
                        <div class="txtBold">3. Creating Rex Urobiome User Account (Non-Liability Clause)</div>
                        3.1. You must register to use the Services and, as a record, you acknowledge that: (a) you provide accurate, real, current and complete information about yourself (“Member Data”) at the time of registration, and (b) protect the Member Data you provide during registration and immediately update it at the time of change. You agree that Rex Urobiome can use your data to provide services under the terms of before-mentioned Privacy Policy
                        <br><br>
                        3.2. You are solely responsible for maintaining the confidentiality of the information you use to enter your user account and your password. You accept the responsibility for all activities that take place in your account or on your mobile device. We strive to use reasonable security measures to protect your account against unauthorized access. We cannot promise that your account will prevent the security of your content (as explained below) or the personal information you provide and that our security measures will prevent third parties’ “hackers” from illegally accessing the Services or your content. However, we take all possible security measures to avoid this.
                        <br><br>
                        3.3. If you have any unauthorized access to your Rex Urobiome account or if you suspect your account any other security breaches related to your ciphers, notify us immediately.
                        <br><br>

                        <div class="txtBold">4. Rex Urobiome Service Fees </div>
                        4.1.Rex Urobiome may provide these services free of charge, depending on the Service or the content of the Service used by its users. Using the Rex Urobiome mobile application and website is free of charge.
                        <br><br>

                        <div class="txtBold">5. Cancellation and Return</div>
                        5.1. Rex Urobiome may cancel a user’s membership and suspend or terminate his/her access to Rex Urobiome products and services under these circumstances: (a) breaching any provision of these Terms, (b) misleading Rex Urobiome in any way that Rex Urobiome does not comply with these Terms of Service or (c) adversely affecting Rex Urobiome’s reputation. Appreciation authority belongs to Rex Urobiome.
                        <br><br>
                        5.2. After the cancellation, you will no longer be able to access the Services you have access to  any advice provided through these services. In addition to the cancellation process, Rex Urobiome reserves the right to use all available services.
                        <br><br>

                        <div class="txtBold">6. Disclaimer</div>
                        6.1. Rex Urobiome Services (including websites, apps, and content) and user content are provided “as is,” without warranty or condition of any kind, either express or implied.
                        <br><br>
                        6.2. Rex Urobiome makes no warranty that the site, apps, content, user content or services will meet your requirements or be available on an uninterrupted, secure, or error-free basis.
                        <br><br>
                        6.3. Rex Urobiome makes no warranty regarding the quality of any products, services, or information obtained through the site, apps, content, user content or services, or the accuracy, timeliness, truthfulness, completeness or reliability of any information obtained through the site.
                        <br><br>
                        6.4. Rex Urobiome does not regularly monitor or update the accuracy or reliability of the content.
                        <br><br>
                        6.5. No advice or information, whether oral or written, obtained from Rex Urobiome or through the site, apps, content, user content or services, will not create any warranty expressly made herein or create any liability on the part of Rex Urobiome.
                        <br><br>
                        6.6. The site, apps, content, user content and services are for consumers’ informational use only.
                        <br><br>
                        6.7. Nothing contained in the services is or should be considered, or used as a substitute for, medical, nutritional or any other professional advice, diagnosis or treatment.
                        <br><br>
                        6.8. Rex Urobiome makes no representations or warranties about the information, tools, or content included in the site, apps, content, user content or services.
                        <br><br>

                        <div class="txtBold">7. Agreement Term, Termination, Suspension</div>
                        7.1. These Terms of Service shall be valid for a period of 30 days; will be automatically and continuously renewed at the end of this period or until the end of Rex Urobiome Terms pursuant to this provision within the next 30 day periods.
                        <br><br>
                        7.2. You may terminate these Terms of Service at any time by sending a “Cancel Account / Delete Account” feature or any email in the Rex Urobiome website and mobile applications.
                        <br><br>
                        7.3 Without limiting our rights below, Rex Urobiome may terminate these Terms at any time by communicating with your registered e-mail address or any other communication channels provided by you and giving you thirty (30) days.
                        <br><br>
                        7.4 (i) you have severely violated your obligations under these Terms, our Privacy Policy and other rules and regulations, (ii) violates any applicable laws, regulations or third-party rights; or (iii) violates the privacy or security of Rex Urobiome, its users or third parties, or (iii) violates the privacy or security of Rex Urobiome, its users or third parties; Rex Urobiome may terminate these Terms without notice.
                        <br><br>
                        7.5. When these Terms are terminated, you do not have the right to return any of your Rex Urobiome User Account or User Content. If your access to or use of Rex Urobiome Services has been restricted, your Rex Urobiome User Account has been suspended or terminated by us and you will not be able to open a new Rex Urobiome User Account or access or use the Rex Urobiome Services through someone else’s User Account.
                        <br><br>

                        <div class="txtBold">8. These Terms of Service are subject to the KOREA law, excluding the Vienna Convention on the International Sale of Goods and rules relating to conflicts of law and courts.</div>
                        ANY DISPUTE RELATING TO THESE TERMS OF SERVICE AND THEIR CONSEQUENCES, SUCH AS THEIR INTERPRETATION, PERFORMANCE OR TERMINATION IS SUBJECT TO THE COMPETENT JURISDICTION OF THE COMMERCIAL COURT IN THE RESILIENCE OF THE REGISTERED OFFICE OF REXSOFT WHEREBY IT IS EXPRESSLY MADE JURISDICTION, NOTWITHSTANDING MULTIPLE DEFENDANTS, GUARANTEED CALL OR INCIDENT CLAIM, INCLUDING FOR URGENT PROCEDURES OR PROCEDURES UPON REQUEST. 
                        <br><br>

                    
                        </div>
                    </b-card-text>
                </b-card>
                <b-card bg-variant="white" text-variant="dark" class="basicCard servicePolicy" header="Privacy Policy">
                    <b-card-text>
                        <div class="cardTxt">
                        This Policy (the "Policy") explains the way of treatment of the information which is provided or collected in the web sites and applications on which this Policy is posted. In addition, the Policy also explains the information which is provided or collected in the course of using the applications of the Company which exist in the websites or platforms of other company. <br><br>
                        The Company is the controller of the information provided or collected in the websites on which his Policy is posted and in the course of using the applications of the Company which exist in the websites or platforms of other company.<br><br>
                        Through this Policy, the Company regards personal information of the users as important and inform them of the purpose and method of Company's using the personal information provided by the users and the measures taken by the Company for protection of those personal information.<br><br>
                        This Policy will be effective on the April 30th, 2022 and, in case of modification thereof, the Company will make public notice of it through posting it on the bulletin board of Company's website or individual notice through sending mails, fax or e-mails)<br><br>

                        <div class="txtBold">1. Information to be collected and method of collection </div>
                        (1) Personal information items to be collected <br><br>
                        Personal information items to be collected by the Company are as follows: <br>
                        • Information provided by the users<br>
                        The Company may collect the information directly provided by the users.	<br><br>
                        ※ Applications (Internet)membership service<br>
                        - email address<br>	
                        - encoded identification information (CI), identification information of overlapped membership (DI)<br>	
                        - Uploaded Urobiome Data<br><br>
                        • Information collected while the users use services Besides of information directly provided by the users, the Company may collect information in the course that the users use the service provided by the Company.<br>
                        ※ Equipment information<br>
                        - Equipment identifier, operation system, hardware version, equipment set-up, type and set-up of browser, use information of website or application and telephone number<br><br>
                        ※ Log information<br>
                        - IP address, log data, use time, search word input by users, internet protocol address, cookie and web beacon<br><br>
                        (2) Method of collection The Company collects the information of users in a way of the followings: <br>
                        • webpage, written form, fax, telephone calling, e-mailing, tools for collection of created information<br><br>


                        <div class="txtBold">2. Use of collected information </div>
                        • Member management and identification <br>
                        • To detect and deter unauthorized or fraudulent use of or abuse of the Service <br>
                        • Performance of contract, regarding provision of services demanded by the users<br>
                        • Improvement of existing services and development of new services <br>
                        • Making notice of function of company sites or applications or matters on policy change <br>
                        • To make statistics on member’s service usage, to provide services and place advertisements based on statistical characteristics <br>
                        • To comply with applicable laws or legal obligation <br>
                        • Use of information with prior consent of the users (for example, utilization of marketing advertisement)<br><br>

                        The Company agrees that it will obtain a consent from the users, if the Company desires to use the information other than those expressly stated in this Policy.<br><br>

                        <div class="txtBold">3. Disclosure of collected information </div>
                        Except for the following cases, the Company will not disclose personal information with a 3rd party: <br><br>
                        • when the users consent to disclose in advance:<br>
                        - when the user selects to be provided by the information of products and services of certain companies by sharing his or her personal information with those companies <br>
                        - when the user selects to allow his or her personal information to be shared with the sites or platform of other companies such as social networking sites <br>
                        - other cases where the user gives prior consent for sharing his or her personal information <br><br>
                        • when disclosure is required by the laws: <br>
                        - if required to be disclosed by the laws and regulations; or <br>
                        - if required to be disclosed by the investigative agencies for detecting crimes in accordance with the procedure and method as prescribed in the laws and regulations<br><br>

                        <div class="txtBold">4. User’s right </div>
                        The users or their legal representatives, as main agents of the information, may exercise the following rights regarding the collection, use and sharing of personal information by the Company: <br><br>
                        • exercise right to access to personal information; <br>
                        • make corrections or deletion; <br>
                        • make temporary suspension of treatment of personal information; or <br>
                        • request the withdrawal of their consent provided before <br><br>
                        If, in order to exercise the above rights, you, as an user, use the menu of 'amendment of member information of webpage or contact the Company by sending a document or e-mails, or using telephone to the company(or person in charge of management of personal information or a deputy), the Company will take measures without delay: Provided that the Company may reject the request of you only to the extent that there exists either proper cause as prescribed in the laws or equivalent cause.<br><br>
                                                
                        <div class="txtBold">5. Security</div>
                        The Company regard the security of personal information of uses as very important. The company constructs the following security measures to protect the users' personal information from any unauthorized access, release, use or modification<br><br> 
                        • Encryption of personal information <br>
                        - Transmit users' personal information by using encrypted communication zone <br>
                        - Store important information such as passwords after encrypting it <br><br>
                        • Countermeasures against hacking <br>
                        - Install a system in the zone the external access to which is controlled so as to prevent leakage or damage of users' personal information by hacking or computer virus <br><br>
                        • Establish and execute internal management plan<br><br> 
                        • Install and operate access control system <br><br>
                        • Take measures to prevent forging or alteration of access record<br><br>

                        <div class="txtBold">6. Modification of Privacy Protection Policy </div>
                        The Company has the right to amend or modify this Policy from time to time and, in such case, the Company will make a public notice of it through bulletin board of its website (or through individual notice such as written document, fax or e-mail) and obtain consent from the users if required by relevant laws.<br><br>

                        <div class="txtBold">7. Contact information of Company </div>
                        Please use one of the following methods to contact the Company should you have any queries in respect to this policy or wish to update your information: <br><br>
                        •Company name: Rexsoft<br>
                        Address: Seoul National University Research Park Main Building, 1 Gwanak-ro, Gwanak-gu, Seoul 08826, Republic of Korea<br>
                        Tel.: +82-070-5001-279<br>
                        E-mail: rexsoft.help@gmail.com<br><br>

                        Company designates the following Data Protection Officer (DPO) in order to protect personal information of customers and deal with complaints from customers. <br>
                        DPO of the Company: Hanjin Oh / Chief Strategy Officer<br>
                        Address: Seoul National University Research Park Main Building, 1 Gwanak-ro, Gwanak-gu, Seoul 08826, Republic of Korea<br>
                        E-mail: hanjin@rexsw.com<br><br>

                        The latest update date: April 30th, 2022<br><br>

                        </div>
                    </b-card-text>
                </b-card>
            </div><!--서비스정책-->
        </b-tab>
    </b-tabs>
   
  </div><!--content-->

  
</template>
<script>
export default {

    methods:{ 
      goback(){
          this.$router.go(-1);//     
      } 
    },

        data() {
        return {
            idEmail: 'abcd@rexsw.com',
            examDate: '2022-01-27'
        };
    },
};
</script>