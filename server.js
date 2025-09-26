const http=require('http'); //importing http module
const PORT=3000
const server=http.createServer((req,res)=>{
     if(req.url==='/home' || req.url===('/')){
        res.write(`<!DOCTYPE html>
<html lang="en">

<head>
    <link href="/https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="/https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"  />
    <meta charset="UTF-8">
   
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <style>
/* Padding for qualitySection */
.qualitySection {
    padding: 40px 0 40px 0;
}
/* Privacy Policy Page Custom Styles */
.privacypolicy-section {
    max-width: 700px;
    margin: 40px auto 40px auto;
    background: #f8fcff;
    border-radius: 18px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    padding: 40px 36px 36px 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#checkoutButton:disabled {
    background: grey !important;
    cursor: not-allowed;
}
.privacypolicy-section h1 {
    color: #00BFFF;
    font-size: 2.5em;
    margin-bottom: 10px;
}
.privacypolicy-section h2 {
    color: #0099cc;
    font-size: 1.5em;
    margin-top: 28px;
    margin-bottom: 10px;
}
.privacypolicy-section p, .privacypolicy-section ul {
    color: #444;
    font-size: 1.1em;
    margin-bottom: 18px;
    text-align: center;
}
.privacypolicy-section ul {
    list-style: disc inside;
    padding-left: 0;
    margin-bottom: 24px;
}
.privacypolicy-section ul li {
    margin-bottom: 8px;
    text-align: left;
}
.privacypolicy-section a {
    color: #00BFFF;
    text-decoration: underline;
    transition: color 0.2s;
}
.privacypolicy-section a:hover {
    color: #0099cc;
}
@media (max-width: 700px) {
    .privacypolicy-section {
        padding: 18px 4vw 18px 4vw;
    }
}
/* Footer Modern Styles */
footer {
    background: #f8fcff;
    border-top: 1.5px solid #b1dfe7;
    box-shadow: 0 -2px 16px rgba(0,191,255,0.04);
}
.footerWrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5%;
    padding: 2% 1.5% 1.5% 1.5%;
    align-items: flex-start;
}
.footerWrapper h4 {
    font-size: 1.1em;
    font-weight: 600;
    color: #0099cc;
    margin-bottom: 10px;
}
.footerWrapper ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.footerWrapper a {
    color: #00BFFF;
    text-decoration: none;
    transition: color 0.2s;
}
.footerWrapper a:hover {
    color: #0099cc;
}
.footerWrapper .aboutus p {
    color: #444;
    font-size: 1em;
    margin-top: 8px;
}
.footerWrapper .contactus p {
    color: #333;
    font-size: 1em;
    margin: 4px 0;
}
.footerWrapper .socialMedia {
    margin-top: 10px;
}
.footerWrapper .socialMedia a {
    margin: 0 8px;
    color: #00BFFF;
    font-size: 1.3em;
    transition: color 0.2s;
}
.footerWrapper .socialMedia a:hover {
    color: #0099cc;
}
@media (max-width: 900px) {
    .footerWrapper {
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        padding: 3% 2% 2% 2%;
    }
}
@media (max-width: 600px) {
    .footerWrapper {
        grid-template-columns: 1fr;
        gap: 18px;
        padding: 4% 2% 2% 2%;
    }
    .footerWrapper h4 {
        font-size: 1em;
    }
}
/* About Us Page Custom Styles */
.aboutus-section {
    max-width: 700px;
    margin: 40px auto 40px auto;
    background: #f8fcff;
    border-radius: 18px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    padding: 40px 36px 36px 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.aboutus-section h1 {
    color: #00BFFF;
    font-size: 2.5em;
    margin-bottom: 10px;
}
.aboutus-section h2 {
    color: #0099cc;
    font-size: 1.5em;
    margin-top: 28px;
    margin-bottom: 10px;
}
.aboutus-section p, .aboutus-section ul {
    color: #444;
    font-size: 1.1em;
    margin-bottom: 18px;
    text-align: center;
}
.aboutus-section ul {
    list-style: disc inside;
    padding-left: 0;
    margin-bottom: 24px;
}
.aboutus-section ul li {
    margin-bottom: 8px;
    text-align: left;
}
.aboutus-section .serviceDetails {
    display: flex;
    justify-content: center;
    gap: 32px;
    margin-top: 18px;
}
.aboutus-section .serviceDetails p {
    background: #e6f7fb;
    border-radius: 12px;
    padding: 18px 24px;
    color: #00BFFF;
    font-size: 1.1em;
    font-weight: 500;
    min-width: 120px;
}
.aboutus-section .serviceDetails p span {
    font-size: 2em;
    font-weight: bold;
    color: #0099cc;
}
@media (max-width: 700px) {
    .aboutus-section {
        padding: 18px 4vw 18px 4vw;
    }
    .aboutus-section .serviceDetails {
        flex-direction: column;
        gap: 12px;
        align-items: center;
    }
}
/* Contact Us Page Custom Styles */
.contactus-section {
    max-width: 600px;
    margin: 40px auto 40px auto;
    background: #f8fcff;
    border-radius: 18px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    padding: 40px 32px 32px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.contactus-section h1 {
    color: #00BFFF;
    font-size: 2.5em;
    margin-bottom: 10px;
}
.contactus-section p {
    color: #444;
    font-size: 1.1em;
    margin-bottom: 24px;
    text-align: center;
}
#contactForm.forms {
    width: 100%;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,191,255,0.08);
    padding: 24px 20px 20px 20px;
    margin-bottom: 32px;
}
#contactForm label {
    color: #222;
    font-weight: 500;
    margin-bottom: 6px;
    display: block;
}
#contactForm input, #contactForm textarea {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #b1dfe7;
    margin-top: 6px;
    margin-bottom: 18px;
    font-size: 1em;
    background: #fafdff;
    transition: border 0.2s;
}
#contactForm input:focus, #contactForm textarea:focus {
    border: 2px solid #00BFFF;
    outline: none;
}
#contactForm button[type="submit"] {
    background: #00BFFF;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 12px 0;
    font-size: 1.1em;
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    margin-top: 8px;
    box-shadow: 0 2px 8px rgba(0,191,255,0.08);
    transition: background 0.2s;
}
#contactForm button[type="submit"]:hover {
    background: #0099cc;
}
.contact-details {
    margin-top: 32px;
    text-align: center;
}
.contact-details h2 {
    color: #00BFFF;
    font-size: 1.3em;
    margin-bottom: 10px;
}
.contact-details p {
    color: #333;
    margin: 4px 0;
}
.contact-details .socialMedia {
    margin-top: 16px;
}
.contact-details .socialMedia a {
    margin: 0 10px;
    color: #00BFFF;
    font-size: 1.5em;
    transition: color 0.2s;
}
.contact-details .socialMedia a:hover {
    color: #0099cc;
}
@media (max-width: 700px) {
    .contactus-section {
        padding: 18px 4vw 18px 4vw;
    }
    #contactForm.forms {
        padding: 14px 2vw 14px 2vw;
    }
}
.logo {
    width: 100px;
}

ul.menu {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
}

ul.menu a {
    text-decoration: none;
    color: grey;
    font-size: 18px;
}

.headerWrapper {
    display: grid;
    grid-template-columns: 4fr 3fr;
}

div.userName {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding-right: 10%;
}

div.userName p {
    background: #b1dfe7;
    padding: 15px;
    border-radius: 15px;
    color: blue;
    font-weight: 600;
}

.heroSection,
.formSection,
#booking {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 10px
}

.formSection {
    grid-template-columns: 1fr;
}

h1,
h2 {
    font-weight: bold;
    color: #515050;
    font-size: 3em;

}

.heroSection div {
    padding: 10% 17%;
}

formSection div {
    padding: 0 4%;
    display: flex;
    flex-direction: column;
}

.heroSection a {
    text-decoration: none;
    color: transparent
}

#booking {
    padding: 0 8%;
}

.add_item {
    border: none;
    border-radius: 10px;
    padding: 10px 25px;
}

.add_item i.removeItem {

    color: red;

}

.add_item i.addItem {

    color: blue;

}

h2 {
    color: #00BFFF;
}

.heroSection p {
    font-size: 1.13em;
    color: grey;
    font-weight: 400;
    letter-spacing: 1px;
}

.heroSection button,
.formSection button {
    background: #00BFFF;
    padding: 15px 30px;
    border-radius: 15px;
    color: white;
    font-weight: 600;
    border: none;
    font-size: 1.13em;
    cursor: pointer;
}

.formSection button {
    padding: 10px 15px;
}

.heroSection img {
    width: 60%;
}

.formBox,
.colorBox {
    border: 2px solid #b1dfe7;
    border-radius: 15px;
    box-shadow: 5px 5px 10px grey;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
}

.formBox form {
    padding: 20px;
}

.formBox label {
    font-size: 1.13em;
    color: grey;
    font-weight: 400;
    letter-spacing: 1px;
}

.formBox input {
    display: block;
    margin-top: 10px;
    padding: 10px;
    width: 90%;
    border-radius: 10px;
    border: 1px solid grey;
    font-size: 1em;
}

.formBox input:focus {
    outline: none;
    border: 2px solid #00BFFF;
    margin-left: 20px;
}

.headBand {
    background: #b1dfe7;
    padding: 15px;
    color: blue;
    font-weight: 600;
    color: black;
    text-align: center
}

.colorBox {
    box-shadow: -3px 3px 10px 4px grey;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 20px !important;
    text-align: center;
    flex-direction: row;
    width: 90%;
    row-gap: 20px;
}

.colorBox div {
    height: 130px;
    row-gap: 20px;
    border-radius: 20px;
    border: 2px solid grey;
    text-align: center;
    vertical-align: middle;
    font-size: 1.5em;
    line-height: 50px;

}

#red {
    background: white;
    cursor: pointer;
    color: red
}

#blue {
    background: white;
    cursor: pointer;
    color: blue
}


#green {
    background: white;
    cursor: pointer;
    color: green;
}

#yellow {
    background: white;
    cursor: pointer;
    color: rgb(130, 130, 20)
}

#red.full {
    background: red;
    color: black
}

#blue.full {
    background: blue;
    color: black
}

#green.full {
    background: green;
    color: black
}

#yellow.full {
    background: yellow;
    color: black
}

.services {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0 10px
}

.bookingSection p {
    color: red;
    display: block;
    font-size: 13px;
    text-align: left;
    padding-left: 5%;
}

.qualitySection ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    text-align: center;
}

.newsletterSection {
    display: grid;
    grid-template-columns: 3fr 2fr;
    background-color: #00BFFF;
    padding: 5% 17%
}

.newsletterSection h2 {
    color: white;
    padding: 20px 0 0 20px;
    text-align: left;
}

form.newsletterForm div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:10px
}

.serviceSection {
    display: grid;
    grid-template-columns: 4fr 4fr;
    background-color: #00BFFF;
}
.footerWrapper{
    display: grid
;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap:5%;
    padding: 5% 10%;
    align-items: flex-start;
}
.footerWrapper h4{
        font-size: 14px;
    font-weight: 400;
}
.importantLinks ul{
    list-style: none;
    padding: 0;
}
.importantLinks a{
    text-decoration: none;
    color:black
}
.serviceSection h2 {
    color: #000;
    padding: 20px 0 0 20px;
}

.serviceSection p {
    color: #000;
    padding: 0 20px 20px 20px;
    margin: 0
}

.serviceSection p span {
    font-size: 30px;
    font-weight: bold;
}

.serviceDetails {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.services .items {
    display: flex;
    flex-direction: column;
}

.services .items ul {
    display: flex;
    list-style: none;
    flex-direction: row;
    padding: 0;
    /* grid-template-columns: 1fr 1fr;
  grid-auto-flow: column;   put items in columns */
    justify-content: space-between;

}

.addItem,
.formSection,
.services {
    border: 2px solid #b1dfe7;
    border-radius: 15px;
    box-shadow: 5px 5px 10px grey;
    margin-top: 20px;
}

.formSection {
    padding: 5% 10px;
}

form.forms div:first-child {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    align-items: self-start;
}

form.forms div:nth-child(2) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    justify-content: space-between;
    align-items: self-start;
}

form.forms div label {
    margin-bottom: 10px;

}

form.forms div input, form.newsletterForm input,form.newsletterForm button{
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border-color: #eeeeee;
    margin-top: 10px;
}

form.forms button {
    width: 70%;
    margin-top: 20px;
    padding: 15px;
    border-radius: 10px;
    border: none;
    background-color: #1d4350;
    color: white;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
}

.addItem {
    padding-top: 3%;
}

.addItem h3 {
    text-align: center;
    font-size: 14px;
    font-weight: bold;
}

.formSection h4 {
    font-size: 14px;
}

.addItem #cartItemsList {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    background-color: #eeeeee;
    padding: 10px
}

.addItem .cart-row {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eeeeee;
    padding: 0 15px;
}

.addItem p {
    text-align: center;
    display: block;
}

#itemFound {
    display: none;
}

.remove_item {
    background-color: #efdede6e !important;
    color: red !important;
    font-weight: bold !important;
    border: none;
    border-radius: 10px;
    padding: 10px 25px;

}

.add_item {
    background-color: #eeeeee;
    color: black;
    font-weight: 400;
}

@media (max-width: 768px) {

    .headerWrapper {
        grid-template-columns: 1fr 1fr;
        row-gap: 20px;
        text-align: center;
    }

    .heroSection div,
    .formSection div {
        padding: 0 5%;
    }

    .heroSection,
    .formSection {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .heroSection img {
        width: 80%;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .formSection div {
        padding: 5%;
    }

    ul.menu {
        order: 3;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }

    div.userName {
        justify-content: center;
        padding: 0;
    }
}
    </style>
</head>

<body>
   

   <body>
    <header>

        <div class="container-fluid">
            <div class="headerWrapper">
                <ul class="menu">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/aboutus">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
                <div class="userName"> <p>Deepa</p></div>
               
            </div>
        </div>
    </header>

    <section class="heroSection">
        <div>
            <h1>Revitalize Your Clothes with Expert</h1>    
            <h2>Laundary Services!</h2>
            <p>Experience hassle-free laundry with our professional washing, drying, ironing, and dry-cleaning services.
                We ensure your clothes are treated with care, delivered fresh, neatly folded, and always on time.
                Perfect for busy professionals, families, and anyone who values convenience and quality.</p>
            <button>Book a service today!</button>
        </div>
        <div>
        </div>
    </section>
</body>
</body>

</html>`)
     }
 else if(req.url==='/contact'){
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - Laundry Services</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" />
    <script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
    <style>
    /* Padding for qualitySection */
.qualitySection {
    padding: 40px 0 40px 0;
}
/* Privacy Policy Page Custom Styles */
.privacypolicy-section {
    max-width: 700px;
    margin: 40px auto 40px auto;
    background: #f8fcff;
    border-radius: 18px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    padding: 40px 36px 36px 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#checkoutButton:disabled {
    background: grey !important;
    cursor: not-allowed;
}
.privacypolicy-section h1 {
    color: #00BFFF;
    font-size: 2.5em;
    margin-bottom: 10px;
}
.privacypolicy-section h2 {
    color: #0099cc;
    font-size: 1.5em;
    margin-top: 28px;
    margin-bottom: 10px;
}
.privacypolicy-section p, .privacypolicy-section ul {
    color: #444;
    font-size: 1.1em;
    margin-bottom: 18px;
    text-align: center;
}
.privacypolicy-section ul {
    list-style: disc inside;
    padding-left: 0;
    margin-bottom: 24px;
}
.privacypolicy-section ul li {
    margin-bottom: 8px;
    text-align: left;
}
.privacypolicy-section a {
    color: #00BFFF;
    text-decoration: underline;
    transition: color 0.2s;
}
.privacypolicy-section a:hover {
    color: #0099cc;
}
@media (max-width: 700px) {
    .privacypolicy-section {
        padding: 18px 4vw 18px 4vw;
    }
}
/* Footer Modern Styles */
footer {
    background: #f8fcff;
    border-top: 1.5px solid #b1dfe7;
    box-shadow: 0 -2px 16px rgba(0,191,255,0.04);
}
.footerWrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5%;
    padding: 2% 1.5% 1.5% 1.5%;
    align-items: flex-start;
}
.footerWrapper h4 {
    font-size: 1.1em;
    font-weight: 600;
    color: #0099cc;
    margin-bottom: 10px;
}
.footerWrapper ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.footerWrapper a {
    color: #00BFFF;
    text-decoration: none;
    transition: color 0.2s;
}
.footerWrapper a:hover {
    color: #0099cc;
}
.footerWrapper .aboutus p {
    color: #444;
    font-size: 1em;
    margin-top: 8px;
}
.footerWrapper .contactus p {
    color: #333;
    font-size: 1em;
    margin: 4px 0;
}
.footerWrapper .socialMedia {
    margin-top: 10px;
}
.footerWrapper .socialMedia a {
    margin: 0 8px;
    color: #00BFFF;
    font-size: 1.3em;
    transition: color 0.2s;
}
.footerWrapper .socialMedia a:hover {
    color: #0099cc;
}
@media (max-width: 900px) {
    .footerWrapper {
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        padding: 3% 2% 2% 2%;
    }
}
@media (max-width: 600px) {
    .footerWrapper {
        grid-template-columns: 1fr;
        gap: 18px;
        padding: 4% 2% 2% 2%;
    }
    .footerWrapper h4 {
        font-size: 1em;
    }
}
/* About Us Page Custom Styles */
.aboutus-section {
    max-width: 700px;
    margin: 40px auto 40px auto;
    background: #f8fcff;
    border-radius: 18px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    padding: 40px 36px 36px 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.aboutus-section h1 {
    color: #00BFFF;
    font-size: 2.5em;
    margin-bottom: 10px;
}
.aboutus-section h2 {
    color: #0099cc;
    font-size: 1.5em;
    margin-top: 28px;
    margin-bottom: 10px;
}
.aboutus-section p, .aboutus-section ul {
    color: #444;
    font-size: 1.1em;
    margin-bottom: 18px;
    text-align: center;
}
.aboutus-section ul {
    list-style: disc inside;
    padding-left: 0;
    margin-bottom: 24px;
}
.aboutus-section ul li {
    margin-bottom: 8px;
    text-align: left;
}
.aboutus-section .serviceDetails {
    display: flex;
    justify-content: center;
    gap: 32px;
    margin-top: 18px;
}
.aboutus-section .serviceDetails p {
    background: #e6f7fb;
    border-radius: 12px;
    padding: 18px 24px;
    color: #00BFFF;
    font-size: 1.1em;
    font-weight: 500;
    min-width: 120px;
}
.aboutus-section .serviceDetails p span {
    font-size: 2em;
    font-weight: bold;
    color: #0099cc;
}
@media (max-width: 700px) {
    .aboutus-section {
        padding: 18px 4vw 18px 4vw;
    }
    .aboutus-section .serviceDetails {
        flex-direction: column;
        gap: 12px;
        align-items: center;
    }
}
/* Contact Us Page Custom Styles */
.contactus-section {
    max-width: 600px;
    margin: 40px auto 40px auto;
    background: #f8fcff;
    border-radius: 18px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    padding: 40px 32px 32px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.contactus-section h1 {
    color: #00BFFF;
    font-size: 2.5em;
    margin-bottom: 10px;
}
.contactus-section p {
    color: #444;
    font-size: 1.1em;
    margin-bottom: 24px;
    text-align: center;
}
#contactForm.forms {
    width: 100%;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,191,255,0.08);
    padding: 24px 20px 20px 20px;
    margin-bottom: 32px;
}
#contactForm label {
    color: #222;
    font-weight: 500;
    margin-bottom: 6px;
    display: block;
}
#contactForm input, #contactForm textarea {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #b1dfe7;
    margin-top: 6px;
    margin-bottom: 18px;
    font-size: 1em;
    background: #fafdff;
    transition: border 0.2s;
}
#contactForm input:focus, #contactForm textarea:focus {
    border: 2px solid #00BFFF;
    outline: none;
}
#contactForm button[type="submit"] {
    background: #00BFFF;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 12px 0;
    font-size: 1.1em;
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    margin-top: 8px;
    box-shadow: 0 2px 8px rgba(0,191,255,0.08);
    transition: background 0.2s;
}
#contactForm button[type="submit"]:hover {
    background: #0099cc;
}
.contact-details {
    margin-top: 32px;
    text-align: center;
}
.contact-details h2 {
    color: #00BFFF;
    font-size: 1.3em;
    margin-bottom: 10px;
}
.contact-details p {
    color: #333;
    margin: 4px 0;
}
.contact-details .socialMedia {
    margin-top: 16px;
}
.contact-details .socialMedia a {
    margin: 0 10px;
    color: #00BFFF;
    font-size: 1.5em;
    transition: color 0.2s;
}
.contact-details .socialMedia a:hover {
    color: #0099cc;
}
@media (max-width: 700px) {
    .contactus-section {
        padding: 18px 4vw 18px 4vw;
    }
    #contactForm.forms {
        padding: 14px 2vw 14px 2vw;
    }
}
.logo {
    width: 100px;
}

ul.menu {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
}

ul.menu a {
    text-decoration: none;
    color: grey;
    font-size: 18px;
}

.headerWrapper {
    display: grid;
    grid-template-columns:4fr 3fr;
}

div.userName {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding-right: 10%;
}

div.userName p {
    background: #b1dfe7;
    padding: 15px;
    border-radius: 15px;
    color: blue;
    font-weight: 600;
}

.heroSection,
.formSection,
#booking {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 10px
}

.formSection {
    grid-template-columns: 1fr;
}

h1,
h2 {
    font-weight: bold;
    color: #515050;
    font-size: 3em;

}

.heroSection div {
    padding: 10% 17%;
}

formSection div {
    padding: 0 4%;
    display: flex;
    flex-direction: column;
}

.heroSection a {
    text-decoration: none;
    color: transparent
}

#booking {
    padding: 0 8%;
}

.add_item {
    border: none;
    border-radius: 10px;
    padding: 10px 25px;
}

.add_item i.removeItem {

    color: red;

}

.add_item i.addItem {

    color: blue;

}

h2 {
    color: #00BFFF;
}

.heroSection p {
    font-size: 1.13em;
    color: grey;
    font-weight: 400;
    letter-spacing: 1px;
}

.heroSection button,
.formSection button {
    background: #00BFFF;
    padding: 15px 30px;
    border-radius: 15px;
    color: white;
    font-weight: 600;
    border: none;
    font-size: 1.13em;
    cursor: pointer;
}

.formSection button {
    padding: 10px 15px;
}

.heroSection img {
    width: 60%;
}

.formBox,
.colorBox {
    border: 2px solid #b1dfe7;
    border-radius: 15px;
    box-shadow: 5px 5px 10px grey;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
}

.formBox form {
    padding: 20px;
}

.formBox label {
    font-size: 1.13em;
    color: grey;
    font-weight: 400;
    letter-spacing: 1px;
}

.formBox input {
    display: block;
    margin-top: 10px;
    padding: 10px;
    width: 90%;
    border-radius: 10px;
    border: 1px solid grey;
    font-size: 1em;
}

.formBox input:focus {
    outline: none;
    border: 2px solid #00BFFF;
    margin-left: 20px;
}

.headBand {
    background: #b1dfe7;
    padding: 15px;
    color: blue;
    font-weight: 600;
    color: black;
    text-align: center
}

.colorBox {
    box-shadow: -3px 3px 10px 4px grey;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 20px !important;
    text-align: center;
    flex-direction: row;
    width: 90%;
    row-gap: 20px;
}

.colorBox div {
    height: 130px;
    row-gap: 20px;
    border-radius: 20px;
    border: 2px solid grey;
    text-align: center;
    vertical-align: middle;
    font-size: 1.5em;
    line-height: 50px;

}

#red {
    background: white;
    cursor: pointer;
    color: red
}

#blue {
    background: white;
    cursor: pointer;
    color: blue
}


#green {
    background: white;
    cursor: pointer;
    color: green;
}

#yellow {
    background: white;
    cursor: pointer;
    color: rgb(130, 130, 20)
}

#red.full {
    background: red;
    color: black
}

#blue.full {
    background: blue;
    color: black
}

#green.full {
    background: green;
    color: black
}

#yellow.full {
    background: yellow;
    color: black
}

.services {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0 10px
}

.bookingSection p {
    color: red;
    display: block;
    font-size: 13px;
    text-align: left;
    padding-left: 5%;
}

.qualitySection ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    text-align: center;
}

.newsletterSection {
    display: grid;
    grid-template-columns: 3fr 2fr;
    background-color: #00BFFF;
    padding: 5% 17%
}

.newsletterSection h2 {
    color: white;
    padding: 20px 0 0 20px;
    text-align: left;
}

form.newsletterForm div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:10px
}

.serviceSection {
    display: grid;
    grid-template-columns: 4fr 4fr;
    background-color: #00BFFF;
}
.footerWrapper{
    display: grid
;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap:5%;
    padding: 5% 10%;
    align-items: flex-start;
}
.footerWrapper h4{
        font-size: 14px;
    font-weight: 400;
}
.importantLinks ul{
    list-style: none;
    padding: 0;
}
.importantLinks a{
    text-decoration: none;
    color:black
}
.serviceSection h2 {
    color: #000;
    padding: 20px 0 0 20px;
}

.serviceSection p {
    color: #000;
    padding: 0 20px 20px 20px;
    margin: 0
}

.serviceSection p span {
    font-size: 30px;
    font-weight: bold;
}

.serviceDetails {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.services .items {
    display: flex;
    flex-direction: column;
}

.services .items ul {
    display: flex;
    list-style: none;
    flex-direction: row;
    padding: 0;
    /* grid-template-columns: 1fr 1fr;
  grid-auto-flow: column;   put items in columns */
    justify-content: space-between;

}

.addItem,
.formSection,
.services {
    border: 2px solid #b1dfe7;
    border-radius: 15px;
    box-shadow: 5px 5px 10px grey;
    margin-top: 20px;
}

.formSection {
    padding: 5% 10px;
}

form.forms div:first-child {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    align-items: self-start;
}

form.forms div:nth-child(2) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    justify-content: space-between;
    align-items: self-start;
}

form.forms div label {
    margin-bottom: 10px;

}

form.forms div input, form.newsletterForm input,form.newsletterForm button{
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border-color: #eeeeee;
    margin-top: 10px;
}

form.forms button {
    width: 70%;
    margin-top: 20px;
    padding: 15px;
    border-radius: 10px;
    border: none;
    background-color: #1d4350;
    color: white;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
}

.addItem {
    padding-top: 3%;
}

.addItem h3 {
    text-align: center;
    font-size: 14px;
    font-weight: bold;
}

.formSection h4 {
    font-size: 14px;
}

.addItem #cartItemsList {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    background-color: #eeeeee;
    padding: 10px
}

.addItem .cart-row {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eeeeee;
    padding: 0 15px;
}

.addItem p {
    text-align: center;
    display: block;
}

#itemFound {
    display: none;
}

.remove_item {
    background-color: #efdede6e !important;
    color: red !important;
    font-weight: bold !important;
    border: none;
    border-radius: 10px;
    padding: 10px 25px;

}

.add_item {
    background-color: #eeeeee;
    color: black;
    font-weight: 400;
}

@media (max-width: 768px) {

    .headerWrapper {
        grid-template-columns: 1fr 1fr;
        row-gap: 20px;
        text-align: center;
    }

    .heroSection div,
    .formSection div {
        padding: 0 5%;
    }

    .heroSection,
    .formSection {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .heroSection img {
        width: 80%;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .formSection div {
        padding: 5%;
    }

    ul.menu {
        order: 3;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }

    div.userName {
        justify-content: center;
        padding: 0;
    }
}</style>
</head>
<body>
    <header>

        <div class="container-fluid">
            <div class="headerWrapper">
                <ul class="menu">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/aboutus">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
                <div class="userName"> <p>Deepa</p></div>
               
            </div>
        </div>
    </header>
    <main>
        <section class="contactus-section">
            <h1>Contact Us</h1>
            <p>Have questions or need help? Fill out the form below and our team will get back to you as soon as possible.</p>
            <form id="contactForm" class="forms" onsubmit="sendContactEmail(event)">
                <div>
                    <label for="contact_name">Full Name<br>
                        <input id="contact_name" name="contact_name" type="text" placeholder="Your Name" required autocomplete="on">
                    </label>
                </div>
                <div>
                    <label for="contact_email">Email<br>
                        <input id="contact_email" name="contact_email" type="email" placeholder="Your Email" required autocomplete="on">
                    </label>
                </div>
                <div>
                    <label for="contact_message">Message<br>
                        <textarea id="contact_message" name="contact_message" placeholder="Your Message" required rows="4"></textarea>
                    </label>
                </div>
                <button type="submit">Send Message</button>
            </form>
            <div class="contact-details">
                <h2>Other Ways to Reach Us</h2>
                <p>Email: deepz4work@gmail.com</p>
                <p>Phone: +91 9876543210</p>
                <div class="socialMedia">
                    <a href="https://www.facebook.com/Laundary" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="https://twitter.com/Laundary" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                    <a href="https://www.instagram.com/Laundary/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/Laundary/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
        </section>
    </main>
  
</body>
</html>
`)
res.end()
 }
else if(req.url==='/aboutus'){
res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us - Laundry Services</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" />
    <script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
    <style>
    /* Padding for qualitySection */
.qualitySection {
    padding: 40px 0 40px 0;
}
/* Privacy Policy Page Custom Styles */
.privacypolicy-section {
    max-width: 700px;
    margin: 40px auto 40px auto;
    background: #f8fcff;
    border-radius: 18px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    padding: 40px 36px 36px 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#checkoutButton:disabled {
    background: grey !important;
    cursor: not-allowed;
}
.privacypolicy-section h1 {
    color: #00BFFF;
    font-size: 2.5em;
    margin-bottom: 10px;
}
.privacypolicy-section h2 {
    color: #0099cc;
    font-size: 1.5em;
    margin-top: 28px;
    margin-bottom: 10px;
}
.privacypolicy-section p, .privacypolicy-section ul {
    color: #444;
    font-size: 1.1em;
    margin-bottom: 18px;
    text-align: center;
}
.privacypolicy-section ul {
    list-style: disc inside;
    padding-left: 0;
    margin-bottom: 24px;
}
.privacypolicy-section ul li {
    margin-bottom: 8px;
    text-align: left;
}
.privacypolicy-section a {
    color: #00BFFF;
    text-decoration: underline;
    transition: color 0.2s;
}
.privacypolicy-section a:hover {
    color: #0099cc;
}
@media (max-width: 700px) {
    .privacypolicy-section {
        padding: 18px 4vw 18px 4vw;
    }
}
/* Footer Modern Styles */
footer {
    background: #f8fcff;
    border-top: 1.5px solid #b1dfe7;
    box-shadow: 0 -2px 16px rgba(0,191,255,0.04);
}
.footerWrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5%;
    padding: 2% 1.5% 1.5% 1.5%;
    align-items: flex-start;
}
.footerWrapper h4 {
    font-size: 1.1em;
    font-weight: 600;
    color: #0099cc;
    margin-bottom: 10px;
}
.footerWrapper ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.footerWrapper a {
    color: #00BFFF;
    text-decoration: none;
    transition: color 0.2s;
}
.footerWrapper a:hover {
    color: #0099cc;
}
.footerWrapper .aboutus p {
    color: #444;
    font-size: 1em;
    margin-top: 8px;
}
.footerWrapper .contactus p {
    color: #333;
    font-size: 1em;
    margin: 4px 0;
}
.footerWrapper .socialMedia {
    margin-top: 10px;
}
.footerWrapper .socialMedia a {
    margin: 0 8px;
    color: #00BFFF;
    font-size: 1.3em;
    transition: color 0.2s;
}
.footerWrapper .socialMedia a:hover {
    color: #0099cc;
}
@media (max-width: 900px) {
    .footerWrapper {
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        padding: 3% 2% 2% 2%;
    }
}
@media (max-width: 600px) {
    .footerWrapper {
        grid-template-columns: 1fr;
        gap: 18px;
        padding: 4% 2% 2% 2%;
    }
    .footerWrapper h4 {
        font-size: 1em;
    }
}
/* About Us Page Custom Styles */
.aboutus-section {
    max-width: 700px;
    margin: 40px auto 40px auto;
    background: #f8fcff;
    border-radius: 18px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    padding: 40px 36px 36px 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.aboutus-section h1 {
    color: #00BFFF;
    font-size: 2.5em;
    margin-bottom: 10px;
}
.aboutus-section h2 {
    color: #0099cc;
    font-size: 1.5em;
    margin-top: 28px;
    margin-bottom: 10px;
}
.aboutus-section p, .aboutus-section ul {
    color: #444;
    font-size: 1.1em;
    margin-bottom: 18px;
    text-align: center;
}
.aboutus-section ul {
    list-style: disc inside;
    padding-left: 0;
    margin-bottom: 24px;
}
.aboutus-section ul li {
    margin-bottom: 8px;
    text-align: left;
}
.aboutus-section .serviceDetails {
    display: flex;
    justify-content: center;
    gap: 32px;
    margin-top: 18px;
}
.aboutus-section .serviceDetails p {
    background: #e6f7fb;
    border-radius: 12px;
    padding: 18px 24px;
    color: #00BFFF;
    font-size: 1.1em;
    font-weight: 500;
    min-width: 120px;
}
.aboutus-section .serviceDetails p span {
    font-size: 2em;
    font-weight: bold;
    color: #0099cc;
}
@media (max-width: 700px) {
    .aboutus-section {
        padding: 18px 4vw 18px 4vw;
    }
    .aboutus-section .serviceDetails {
        flex-direction: column;
        gap: 12px;
        align-items: center;
    }
}
/* Contact Us Page Custom Styles */
.contactus-section {
    max-width: 600px;
    margin: 40px auto 40px auto;
    background: #f8fcff;
    border-radius: 18px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    padding: 40px 32px 32px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.contactus-section h1 {
    color: #00BFFF;
    font-size: 2.5em;
    margin-bottom: 10px;
}
.contactus-section p {
    color: #444;
    font-size: 1.1em;
    margin-bottom: 24px;
    text-align: center;
}
#contactForm.forms {
    width: 100%;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,191,255,0.08);
    padding: 24px 20px 20px 20px;
    margin-bottom: 32px;
}
#contactForm label {
    color: #222;
    font-weight: 500;
    margin-bottom: 6px;
    display: block;
}
#contactForm input, #contactForm textarea {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #b1dfe7;
    margin-top: 6px;
    margin-bottom: 18px;
    font-size: 1em;
    background: #fafdff;
    transition: border 0.2s;
}
#contactForm input:focus, #contactForm textarea:focus {
    border: 2px solid #00BFFF;
    outline: none;
}
#contactForm button[type="submit"] {
    background: #00BFFF;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 12px 0;
    font-size: 1.1em;
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    margin-top: 8px;
    box-shadow: 0 2px 8px rgba(0,191,255,0.08);
    transition: background 0.2s;
}
#contactForm button[type="submit"]:hover {
    background: #0099cc;
}
.contact-details {
    margin-top: 32px;
    text-align: center;
}
.contact-details h2 {
    color: #00BFFF;
    font-size: 1.3em;
    margin-bottom: 10px;
}
.contact-details p {
    color: #333;
    margin: 4px 0;
}
.contact-details .socialMedia {
    margin-top: 16px;
}
.contact-details .socialMedia a {
    margin: 0 10px;
    color: #00BFFF;
    font-size: 1.5em;
    transition: color 0.2s;
}
.contact-details .socialMedia a:hover {
    color: #0099cc;
}
@media (max-width: 700px) {
    .contactus-section {
        padding: 18px 4vw 18px 4vw;
    }
    #contactForm.forms {
        padding: 14px 2vw 14px 2vw;
    }
}
.logo {
    width: 100px;
}

ul.menu {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
}

ul.menu a {
    text-decoration: none;
    color: grey;
    font-size: 18px;
}

.headerWrapper {
    display: grid;
    grid-template-columns:4fr 3fr;
}

div.userName {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding-right: 10%;
}

div.userName p {
    background: #b1dfe7;
    padding: 15px;
    border-radius: 15px;
    color: blue;
    font-weight: 600;
}

.heroSection,
.formSection,
#booking {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 10px
}

.formSection {
    grid-template-columns: 1fr;
}

h1,
h2 {
    font-weight: bold;
    color: #515050;
    font-size: 3em;

}

.heroSection div {
    padding: 10% 17%;
}

formSection div {
    padding: 0 4%;
    display: flex;
    flex-direction: column;
}

.heroSection a {
    text-decoration: none;
    color: transparent
}

#booking {
    padding: 0 8%;
}

.add_item {
    border: none;
    border-radius: 10px;
    padding: 10px 25px;
}

.add_item i.removeItem {

    color: red;

}

.add_item i.addItem {

    color: blue;

}

h2 {
    color: #00BFFF;
}

.heroSection p {
    font-size: 1.13em;
    color: grey;
    font-weight: 400;
    letter-spacing: 1px;
}

.heroSection button,
.formSection button {
    background: #00BFFF;
    padding: 15px 30px;
    border-radius: 15px;
    color: white;
    font-weight: 600;
    border: none;
    font-size: 1.13em;
    cursor: pointer;
}

.formSection button {
    padding: 10px 15px;
}

.heroSection img {
    width: 60%;
}

.formBox,
.colorBox {
    border: 2px solid #b1dfe7;
    border-radius: 15px;
    box-shadow: 5px 5px 10px grey;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
}

.formBox form {
    padding: 20px;
}

.formBox label {
    font-size: 1.13em;
    color: grey;
    font-weight: 400;
    letter-spacing: 1px;
}

.formBox input {
    display: block;
    margin-top: 10px;
    padding: 10px;
    width: 90%;
    border-radius: 10px;
    border: 1px solid grey;
    font-size: 1em;
}

.formBox input:focus {
    outline: none;
    border: 2px solid #00BFFF;
    margin-left: 20px;
}

.headBand {
    background: #b1dfe7;
    padding: 15px;
    color: blue;
    font-weight: 600;
    color: black;
    text-align: center
}

.colorBox {
    box-shadow: -3px 3px 10px 4px grey;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 20px !important;
    text-align: center;
    flex-direction: row;
    width: 90%;
    row-gap: 20px;
}

.colorBox div {
    height: 130px;
    row-gap: 20px;
    border-radius: 20px;
    border: 2px solid grey;
    text-align: center;
    vertical-align: middle;
    font-size: 1.5em;
    line-height: 50px;

}

#red {
    background: white;
    cursor: pointer;
    color: red
}

#blue {
    background: white;
    cursor: pointer;
    color: blue
}


#green {
    background: white;
    cursor: pointer;
    color: green;
}

#yellow {
    background: white;
    cursor: pointer;
    color: rgb(130, 130, 20)
}

#red.full {
    background: red;
    color: black
}

#blue.full {
    background: blue;
    color: black
}

#green.full {
    background: green;
    color: black
}

#yellow.full {
    background: yellow;
    color: black
}

.services {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0 10px
}

.bookingSection p {
    color: red;
    display: block;
    font-size: 13px;
    text-align: left;
    padding-left: 5%;
}

.qualitySection ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    text-align: center;
}

.newsletterSection {
    display: grid;
    grid-template-columns: 3fr 2fr;
    background-color: #00BFFF;
    padding: 5% 17%
}

.newsletterSection h2 {
    color: white;
    padding: 20px 0 0 20px;
    text-align: left;
}

form.newsletterForm div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:10px
}

.serviceSection {
    display: grid;
    grid-template-columns: 4fr 4fr;
    background-color: #00BFFF;
}
.footerWrapper{
    display: grid
;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap:5%;
    padding: 5% 10%;
    align-items: flex-start;
}
.footerWrapper h4{
        font-size: 14px;
    font-weight: 400;
}
.importantLinks ul{
    list-style: none;
    padding: 0;
}
.importantLinks a{
    text-decoration: none;
    color:black
}
.serviceSection h2 {
    color: #000;
    padding: 20px 0 0 20px;
}

.serviceSection p {
    color: #000;
    padding: 0 20px 20px 20px;
    margin: 0
}

.serviceSection p span {
    font-size: 30px;
    font-weight: bold;
}

.serviceDetails {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.services .items {
    display: flex;
    flex-direction: column;
}

.services .items ul {
    display: flex;
    list-style: none;
    flex-direction: row;
    padding: 0;
    /* grid-template-columns: 1fr 1fr;
  grid-auto-flow: column;   put items in columns */
    justify-content: space-between;

}

.addItem,
.formSection,
.services {
    border: 2px solid #b1dfe7;
    border-radius: 15px;
    box-shadow: 5px 5px 10px grey;
    margin-top: 20px;
}

.formSection {
    padding: 5% 10px;
}

form.forms div:first-child {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    align-items: self-start;
}

form.forms div:nth-child(2) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    justify-content: space-between;
    align-items: self-start;
}

form.forms div label {
    margin-bottom: 10px;

}

form.forms div input, form.newsletterForm input,form.newsletterForm button{
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border-color: #eeeeee;
    margin-top: 10px;
}

form.forms button {
    width: 70%;
    margin-top: 20px;
    padding: 15px;
    border-radius: 10px;
    border: none;
    background-color: #1d4350;
    color: white;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
}

.addItem {
    padding-top: 3%;
}

.addItem h3 {
    text-align: center;
    font-size: 14px;
    font-weight: bold;
}

.formSection h4 {
    font-size: 14px;
}

.addItem #cartItemsList {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    background-color: #eeeeee;
    padding: 10px
}

.addItem .cart-row {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eeeeee;
    padding: 0 15px;
}

.addItem p {
    text-align: center;
    display: block;
}

#itemFound {
    display: none;
}

.remove_item {
    background-color: #efdede6e !important;
    color: red !important;
    font-weight: bold !important;
    border: none;
    border-radius: 10px;
    padding: 10px 25px;

}

.add_item {
    background-color: #eeeeee;
    color: black;
    font-weight: 400;
}

@media (max-width: 768px) {

    .headerWrapper {
        grid-template-columns: 1fr 1fr;
        row-gap: 20px;
        text-align: center;
    }

    .heroSection div,
    .formSection div {
        padding: 0 5%;
    }

    .heroSection,
    .formSection {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .heroSection img {
        width: 80%;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .formSection div {
        padding: 5%;
    }

    ul.menu {
        order: 3;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }

    div.userName {
        justify-content: center;
        padding: 0;
    }
}</style>
</head>
<body>
    <header>

        <div class="container-fluid">
            <div class="headerWrapper">
                <ul class="menu">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/aboutus">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
                <div class="userName"> <p>Deepa</p></div>
               
            </div>
        </div>
    </header>
       <main>
        <section class="aboutus-section">
            <h1>About Us</h1>
            <p>We are committed to providing top-notch laundry services that combine convenience, quality, and affordability. Our mission is to make laundry day a breeze for our customers, allowing them to enjoy fresh, clean clothes without the hassle.</p>
            <h2>Our Mission</h2>
            <p>To deliver professional laundry solutions with a focus on customer satisfaction, reliability, and care for your garments.</p>
            <h2>Why Choose Us?</h2>
            <ul>
                <li>Premium detergents and fabric softeners</li>
                <li>Quick and hassle-free delivery</li>
                <li>Affordable pricing</li>
                <li>Experienced and friendly staff</li>
                <li>Convenient pickup and delivery options</li>
            </ul>
            <h2>Our Achievements</h2>
            <div class="serviceDetails">
                <p><span>15+</span><br/>Laundry Services</p>
                <p><span>240+</span><br/>Happy Customers</p>
                <p><span>2+ Yrs</span><br/>Experience</p>
            </div>
        </section>
    </main>
  
</body>
</html>
`)
res.end()
 }
   else{
   res.write(`<!DOCTYPE html>
<html lang="en">

<head>
    <link href="/https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="/https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"  />
    <meta charset="UTF-8">
   
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <style>
/* Padding for qualitySection */
.qualitySection {
    padding: 40px 0 40px 0;
}
/* Privacy Policy Page Custom Styles */
.privacypolicy-section {
    max-width: 700px;
    margin: 40px auto 40px auto;
    background: #f8fcff;
    border-radius: 18px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    padding: 40px 36px 36px 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#checkoutButton:disabled {
    background: grey !important;
    cursor: not-allowed;
}
.privacypolicy-section h1 {
    color: #00BFFF;
    font-size: 2.5em;
    margin-bottom: 10px;
}
.privacypolicy-section h2 {
    color: #0099cc;
    font-size: 1.5em;
    margin-top: 28px;
    margin-bottom: 10px;
}
.privacypolicy-section p, .privacypolicy-section ul {
    color: #444;
    font-size: 1.1em;
    margin-bottom: 18px;
    text-align: center;
}
.privacypolicy-section ul {
    list-style: disc inside;
    padding-left: 0;
    margin-bottom: 24px;
}
.privacypolicy-section ul li {
    margin-bottom: 8px;
    text-align: left;
}
.privacypolicy-section a {
    color: #00BFFF;
    text-decoration: underline;
    transition: color 0.2s;
}
.privacypolicy-section a:hover {
    color: #0099cc;
}
@media (max-width: 700px) {
    .privacypolicy-section {
        padding: 18px 4vw 18px 4vw;
    }
}
/* Footer Modern Styles */
footer {
    background: #f8fcff;
    border-top: 1.5px solid #b1dfe7;
    box-shadow: 0 -2px 16px rgba(0,191,255,0.04);
}
.footerWrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5%;
    padding: 2% 1.5% 1.5% 1.5%;
    align-items: flex-start;
}
.footerWrapper h4 {
    font-size: 1.1em;
    font-weight: 600;
    color: #0099cc;
    margin-bottom: 10px;
}
.footerWrapper ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.footerWrapper a {
    color: #00BFFF;
    text-decoration: none;
    transition: color 0.2s;
}
.footerWrapper a:hover {
    color: #0099cc;
}
.footerWrapper .aboutus p {
    color: #444;
    font-size: 1em;
    margin-top: 8px;
}
.footerWrapper .contactus p {
    color: #333;
    font-size: 1em;
    margin: 4px 0;
}
.footerWrapper .socialMedia {
    margin-top: 10px;
}
.footerWrapper .socialMedia a {
    margin: 0 8px;
    color: #00BFFF;
    font-size: 1.3em;
    transition: color 0.2s;
}
.footerWrapper .socialMedia a:hover {
    color: #0099cc;
}
@media (max-width: 900px) {
    .footerWrapper {
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        padding: 3% 2% 2% 2%;
    }
}
@media (max-width: 600px) {
    .footerWrapper {
        grid-template-columns: 1fr;
        gap: 18px;
        padding: 4% 2% 2% 2%;
    }
    .footerWrapper h4 {
        font-size: 1em;
    }
}
/* About Us Page Custom Styles */
.aboutus-section {
    max-width: 700px;
    margin: 40px auto 40px auto;
    background: #f8fcff;
    border-radius: 18px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    padding: 40px 36px 36px 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.aboutus-section h1 {
    color: #00BFFF;
    font-size: 2.5em;
    margin-bottom: 10px;
}
.aboutus-section h2 {
    color: #0099cc;
    font-size: 1.5em;
    margin-top: 28px;
    margin-bottom: 10px;
}
.aboutus-section p, .aboutus-section ul {
    color: #444;
    font-size: 1.1em;
    margin-bottom: 18px;
    text-align: center;
}
.aboutus-section ul {
    list-style: disc inside;
    padding-left: 0;
    margin-bottom: 24px;
}
.aboutus-section ul li {
    margin-bottom: 8px;
    text-align: left;
}
.aboutus-section .serviceDetails {
    display: flex;
    justify-content: center;
    gap: 32px;
    margin-top: 18px;
}
.aboutus-section .serviceDetails p {
    background: #e6f7fb;
    border-radius: 12px;
    padding: 18px 24px;
    color: #00BFFF;
    font-size: 1.1em;
    font-weight: 500;
    min-width: 120px;
}
.aboutus-section .serviceDetails p span {
    font-size: 2em;
    font-weight: bold;
    color: #0099cc;
}
@media (max-width: 700px) {
    .aboutus-section {
        padding: 18px 4vw 18px 4vw;
    }
    .aboutus-section .serviceDetails {
        flex-direction: column;
        gap: 12px;
        align-items: center;
    }
}
/* Contact Us Page Custom Styles */
.contactus-section {
    max-width: 600px;
    margin: 40px auto 40px auto;
    background: #f8fcff;
    border-radius: 18px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    padding: 40px 32px 32px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.contactus-section h1 {
    color: #00BFFF;
    font-size: 2.5em;
    margin-bottom: 10px;
}
.contactus-section p {
    color: #444;
    font-size: 1.1em;
    margin-bottom: 24px;
    text-align: center;
}
#contactForm.forms {
    width: 100%;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,191,255,0.08);
    padding: 24px 20px 20px 20px;
    margin-bottom: 32px;
}
#contactForm label {
    color: #222;
    font-weight: 500;
    margin-bottom: 6px;
    display: block;
}
#contactForm input, #contactForm textarea {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #b1dfe7;
    margin-top: 6px;
    margin-bottom: 18px;
    font-size: 1em;
    background: #fafdff;
    transition: border 0.2s;
}
#contactForm input:focus, #contactForm textarea:focus {
    border: 2px solid #00BFFF;
    outline: none;
}
#contactForm button[type="submit"] {
    background: #00BFFF;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 12px 0;
    font-size: 1.1em;
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    margin-top: 8px;
    box-shadow: 0 2px 8px rgba(0,191,255,0.08);
    transition: background 0.2s;
}
#contactForm button[type="submit"]:hover {
    background: #0099cc;
}
.contact-details {
    margin-top: 32px;
    text-align: center;
}
.contact-details h2 {
    color: #00BFFF;
    font-size: 1.3em;
    margin-bottom: 10px;
}
.contact-details p {
    color: #333;
    margin: 4px 0;
}
.contact-details .socialMedia {
    margin-top: 16px;
}
.contact-details .socialMedia a {
    margin: 0 10px;
    color: #00BFFF;
    font-size: 1.5em;
    transition: color 0.2s;
}
.contact-details .socialMedia a:hover {
    color: #0099cc;
}
@media (max-width: 700px) {
    .contactus-section {
        padding: 18px 4vw 18px 4vw;
    }
    #contactForm.forms {
        padding: 14px 2vw 14px 2vw;
    }
}
.logo {
    width: 100px;
}

ul.menu {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
}

ul.menu a {
    text-decoration: none;
    color: grey;
    font-size: 18px;
}

.headerWrapper {
    display: grid;
    grid-template-columns: 4fr 3fr;
}

div.userName {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding-right: 10%;
}

div.userName p {
    background: #b1dfe7;
    padding: 15px;
    border-radius: 15px;
    color: blue;
    font-weight: 600;
}

.heroSection,
.formSection,
#booking {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 10px
}

.formSection {
    grid-template-columns: 1fr;
}

h1,
h2 {
    font-weight: bold;
    color: #515050;
    font-size: 3em;

}

.heroSection div {
    padding: 10% 17%;
}

formSection div {
    padding: 0 4%;
    display: flex;
    flex-direction: column;
}

.heroSection a {
    text-decoration: none;
    color: transparent
}

#booking {
    padding: 0 8%;
}

.add_item {
    border: none;
    border-radius: 10px;
    padding: 10px 25px;
}

.add_item i.removeItem {

    color: red;

}

.add_item i.addItem {

    color: blue;

}

h2 {
    color: #00BFFF;
}

.heroSection p {
    font-size: 1.13em;
    color: grey;
    font-weight: 400;
    letter-spacing: 1px;
}

.heroSection button,
.formSection button {
    background: #00BFFF;
    padding: 15px 30px;
    border-radius: 15px;
    color: white;
    font-weight: 600;
    border: none;
    font-size: 1.13em;
    cursor: pointer;
}

.formSection button {
    padding: 10px 15px;
}

.heroSection img {
    width: 60%;
}

.formBox,
.colorBox {
    border: 2px solid #b1dfe7;
    border-radius: 15px;
    box-shadow: 5px 5px 10px grey;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
}

.formBox form {
    padding: 20px;
}

.formBox label {
    font-size: 1.13em;
    color: grey;
    font-weight: 400;
    letter-spacing: 1px;
}

.formBox input {
    display: block;
    margin-top: 10px;
    padding: 10px;
    width: 90%;
    border-radius: 10px;
    border: 1px solid grey;
    font-size: 1em;
}

.formBox input:focus {
    outline: none;
    border: 2px solid #00BFFF;
    margin-left: 20px;
}

.headBand {
    background: #b1dfe7;
    padding: 15px;
    color: blue;
    font-weight: 600;
    color: black;
    text-align: center
}

.colorBox {
    box-shadow: -3px 3px 10px 4px grey;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 20px !important;
    text-align: center;
    flex-direction: row;
    width: 90%;
    row-gap: 20px;
}

.colorBox div {
    height: 130px;
    row-gap: 20px;
    border-radius: 20px;
    border: 2px solid grey;
    text-align: center;
    vertical-align: middle;
    font-size: 1.5em;
    line-height: 50px;

}

#red {
    background: white;
    cursor: pointer;
    color: red
}

#blue {
    background: white;
    cursor: pointer;
    color: blue
}


#green {
    background: white;
    cursor: pointer;
    color: green;
}

#yellow {
    background: white;
    cursor: pointer;
    color: rgb(130, 130, 20)
}

#red.full {
    background: red;
    color: black
}

#blue.full {
    background: blue;
    color: black
}

#green.full {
    background: green;
    color: black
}

#yellow.full {
    background: yellow;
    color: black
}

.services {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0 10px
}

.bookingSection p {
    color: red;
    display: block;
    font-size: 13px;
    text-align: left;
    padding-left: 5%;
}

.qualitySection ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    text-align: center;
}

.newsletterSection {
    display: grid;
    grid-template-columns: 3fr 2fr;
    background-color: #00BFFF;
    padding: 5% 17%
}

.newsletterSection h2 {
    color: white;
    padding: 20px 0 0 20px;
    text-align: left;
}

form.newsletterForm div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:10px
}

.serviceSection {
    display: grid;
    grid-template-columns: 4fr 4fr;
    background-color: #00BFFF;
}
.footerWrapper{
    display: grid
;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap:5%;
    padding: 5% 10%;
    align-items: flex-start;
}
.footerWrapper h4{
        font-size: 14px;
    font-weight: 400;
}
.importantLinks ul{
    list-style: none;
    padding: 0;
}
.importantLinks a{
    text-decoration: none;
    color:black
}
.serviceSection h2 {
    color: #000;
    padding: 20px 0 0 20px;
}

.serviceSection p {
    color: #000;
    padding: 0 20px 20px 20px;
    margin: 0
}

.serviceSection p span {
    font-size: 30px;
    font-weight: bold;
}

.serviceDetails {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.services .items {
    display: flex;
    flex-direction: column;
}

.services .items ul {
    display: flex;
    list-style: none;
    flex-direction: row;
    padding: 0;
    /* grid-template-columns: 1fr 1fr;
  grid-auto-flow: column;   put items in columns */
    justify-content: space-between;

}

.addItem,
.formSection,
.services {
    border: 2px solid #b1dfe7;
    border-radius: 15px;
    box-shadow: 5px 5px 10px grey;
    margin-top: 20px;
}

.formSection {
    padding: 5% 10px;
}

form.forms div:first-child {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    align-items: self-start;
}

form.forms div:nth-child(2) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    justify-content: space-between;
    align-items: self-start;
}

form.forms div label {
    margin-bottom: 10px;

}

form.forms div input, form.newsletterForm input,form.newsletterForm button{
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border-color: #eeeeee;
    margin-top: 10px;
}

form.forms button {
    width: 70%;
    margin-top: 20px;
    padding: 15px;
    border-radius: 10px;
    border: none;
    background-color: #1d4350;
    color: white;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
}

.addItem {
    padding-top: 3%;
}

.addItem h3 {
    text-align: center;
    font-size: 14px;
    font-weight: bold;
}

.formSection h4 {
    font-size: 14px;
}

.addItem #cartItemsList {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    background-color: #eeeeee;
    padding: 10px
}

.addItem .cart-row {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eeeeee;
    padding: 0 15px;
}

.addItem p {
    text-align: center;
    display: block;
}

#itemFound {
    display: none;
}

.remove_item {
    background-color: #efdede6e !important;
    color: red !important;
    font-weight: bold !important;
    border: none;
    border-radius: 10px;
    padding: 10px 25px;

}

.add_item {
    background-color: #eeeeee;
    color: black;
    font-weight: 400;
}

@media (max-width: 768px) {

    .headerWrapper {
        grid-template-columns: 1fr 1fr;
        row-gap: 20px;
        text-align: center;
    }

    .heroSection div,
    .formSection div {
        padding: 0 5%;
    }

    .heroSection,
    .formSection {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .heroSection img {
        width: 80%;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .formSection div {
        padding: 5%;
    }

    ul.menu {
        order: 3;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }

    div.userName {
        justify-content: center;
        padding: 0;
    }
}
    </style>
</head>

<body>
   

   <body>
    <header>

        <div class="container-fluid">
            <div class="headerWrapper">
                <ul class="menu">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/aboutus">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
                <div class="userName"> <p>Deepa</p></div>
               
            </div>
        </div>
    </header>
<h1 style="    color: #00BFFF;
    font-size: 2.5em;
    margin-bottom: 10px;
    text-align: center;">404- File not Found</h1>
   
</body>
</body>

</html>`);
res.end()
   }
    //initializing the page
//      res.write(`<!DOCTYPE html>
// <html lang="en">

// <head>
//     <link href="/https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
//     <link rel="stylesheet" href="/https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"  />
//     <meta charset="UTF-8">
   
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Home</title>
//     <style>
// /* Padding for qualitySection */
// .qualitySection {
//     padding: 40px 0 40px 0;
// }
// /* Privacy Policy Page Custom Styles */
// .privacypolicy-section {
//     max-width: 700px;
//     margin: 40px auto 40px auto;
//     background: #f8fcff;
//     border-radius: 18px;
//     box-shadow: 0 4px 24px rgba(0,0,0,0.08);
//     padding: 40px 36px 36px 36px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// }

// #checkoutButton:disabled {
//     background: grey !important;
//     cursor: not-allowed;
// }
// .privacypolicy-section h1 {
//     color: #00BFFF;
//     font-size: 2.5em;
//     margin-bottom: 10px;
// }
// .privacypolicy-section h2 {
//     color: #0099cc;
//     font-size: 1.5em;
//     margin-top: 28px;
//     margin-bottom: 10px;
// }
// .privacypolicy-section p, .privacypolicy-section ul {
//     color: #444;
//     font-size: 1.1em;
//     margin-bottom: 18px;
//     text-align: center;
// }
// .privacypolicy-section ul {
//     list-style: disc inside;
//     padding-left: 0;
//     margin-bottom: 24px;
// }
// .privacypolicy-section ul li {
//     margin-bottom: 8px;
//     text-align: left;
// }
// .privacypolicy-section a {
//     color: #00BFFF;
//     text-decoration: underline;
//     transition: color 0.2s;
// }
// .privacypolicy-section a:hover {
//     color: #0099cc;
// }
// @media (max-width: 700px) {
//     .privacypolicy-section {
//         padding: 18px 4vw 18px 4vw;
//     }
// }
// /* Footer Modern Styles */
// footer {
//     background: #f8fcff;
//     border-top: 1.5px solid #b1dfe7;
//     box-shadow: 0 -2px 16px rgba(0,191,255,0.04);
// }
// .footerWrapper {
//     max-width: 1200px;
//     margin: 0 auto;
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     gap: 5%;
//     padding: 2% 1.5% 1.5% 1.5%;
//     align-items: flex-start;
// }
// .footerWrapper h4 {
//     font-size: 1.1em;
//     font-weight: 600;
//     color: #0099cc;
//     margin-bottom: 10px;
// }
// .footerWrapper ul {
//     list-style: none;
//     padding: 0;
//     margin: 0;
// }
// .footerWrapper a {
//     color: #00BFFF;
//     text-decoration: none;
//     transition: color 0.2s;
// }
// .footerWrapper a:hover {
//     color: #0099cc;
// }
// .footerWrapper .aboutus p {
//     color: #444;
//     font-size: 1em;
//     margin-top: 8px;
// }
// .footerWrapper .contactus p {
//     color: #333;
//     font-size: 1em;
//     margin: 4px 0;
// }
// .footerWrapper .socialMedia {
//     margin-top: 10px;
// }
// .footerWrapper .socialMedia a {
//     margin: 0 8px;
//     color: #00BFFF;
//     font-size: 1.3em;
//     transition: color 0.2s;
// }
// .footerWrapper .socialMedia a:hover {
//     color: #0099cc;
// }
// @media (max-width: 900px) {
//     .footerWrapper {
//         grid-template-columns: 1fr 1fr;
//         gap: 24px;
//         padding: 3% 2% 2% 2%;
//     }
// }
// @media (max-width: 600px) {
//     .footerWrapper {
//         grid-template-columns: 1fr;
//         gap: 18px;
//         padding: 4% 2% 2% 2%;
//     }
//     .footerWrapper h4 {
//         font-size: 1em;
//     }
// }
// /* About Us Page Custom Styles */
// .aboutus-section {
//     max-width: 700px;
//     margin: 40px auto 40px auto;
//     background: #f8fcff;
//     border-radius: 18px;
//     box-shadow: 0 4px 24px rgba(0,0,0,0.08);
//     padding: 40px 36px 36px 36px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// }
// .aboutus-section h1 {
//     color: #00BFFF;
//     font-size: 2.5em;
//     margin-bottom: 10px;
// }
// .aboutus-section h2 {
//     color: #0099cc;
//     font-size: 1.5em;
//     margin-top: 28px;
//     margin-bottom: 10px;
// }
// .aboutus-section p, .aboutus-section ul {
//     color: #444;
//     font-size: 1.1em;
//     margin-bottom: 18px;
//     text-align: center;
// }
// .aboutus-section ul {
//     list-style: disc inside;
//     padding-left: 0;
//     margin-bottom: 24px;
// }
// .aboutus-section ul li {
//     margin-bottom: 8px;
//     text-align: left;
// }
// .aboutus-section .serviceDetails {
//     display: flex;
//     justify-content: center;
//     gap: 32px;
//     margin-top: 18px;
// }
// .aboutus-section .serviceDetails p {
//     background: #e6f7fb;
//     border-radius: 12px;
//     padding: 18px 24px;
//     color: #00BFFF;
//     font-size: 1.1em;
//     font-weight: 500;
//     min-width: 120px;
// }
// .aboutus-section .serviceDetails p span {
//     font-size: 2em;
//     font-weight: bold;
//     color: #0099cc;
// }
// @media (max-width: 700px) {
//     .aboutus-section {
//         padding: 18px 4vw 18px 4vw;
//     }
//     .aboutus-section .serviceDetails {
//         flex-direction: column;
//         gap: 12px;
//         align-items: center;
//     }
// }
// /* Contact Us Page Custom Styles */
// .contactus-section {
//     max-width: 600px;
//     margin: 40px auto 40px auto;
//     background: #f8fcff;
//     border-radius: 18px;
//     box-shadow: 0 4px 24px rgba(0,0,0,0.08);
//     padding: 40px 32px 32px 32px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// }
// .contactus-section h1 {
//     color: #00BFFF;
//     font-size: 2.5em;
//     margin-bottom: 10px;
// }
// .contactus-section p {
//     color: #444;
//     font-size: 1.1em;
//     margin-bottom: 24px;
//     text-align: center;
// }
// #contactForm.forms {
//     width: 100%;
//     background: #fff;
//     border-radius: 12px;
//     box-shadow: 0 2px 8px rgba(0,191,255,0.08);
//     padding: 24px 20px 20px 20px;
//     margin-bottom: 32px;
// }
// #contactForm label {
//     color: #222;
//     font-weight: 500;
//     margin-bottom: 6px;
//     display: block;
// }
// #contactForm input, #contactForm textarea {
//     width: 100%;
//     padding: 12px;
//     border-radius: 8px;
//     border: 1px solid #b1dfe7;
//     margin-top: 6px;
//     margin-bottom: 18px;
//     font-size: 1em;
//     background: #fafdff;
//     transition: border 0.2s;
// }
// #contactForm input:focus, #contactForm textarea:focus {
//     border: 2px solid #00BFFF;
//     outline: none;
// }
// #contactForm button[type="submit"] {
//     background: #00BFFF;
//     color: #fff;
//     border: none;
//     border-radius: 8px;
//     padding: 12px 0;
//     font-size: 1.1em;
//     font-weight: 600;
//     cursor: pointer;
//     width: 100%;
//     margin-top: 8px;
//     box-shadow: 0 2px 8px rgba(0,191,255,0.08);
//     transition: background 0.2s;
// }
// #contactForm button[type="submit"]:hover {
//     background: #0099cc;
// }
// .contact-details {
//     margin-top: 32px;
//     text-align: center;
// }
// .contact-details h2 {
//     color: #00BFFF;
//     font-size: 1.3em;
//     margin-bottom: 10px;
// }
// .contact-details p {
//     color: #333;
//     margin: 4px 0;
// }
// .contact-details .socialMedia {
//     margin-top: 16px;
// }
// .contact-details .socialMedia a {
//     margin: 0 10px;
//     color: #00BFFF;
//     font-size: 1.5em;
//     transition: color 0.2s;
// }
// .contact-details .socialMedia a:hover {
//     color: #0099cc;
// }
// @media (max-width: 700px) {
//     .contactus-section {
//         padding: 18px 4vw 18px 4vw;
//     }
//     #contactForm.forms {
//         padding: 14px 2vw 14px 2vw;
//     }
// }
// .logo {
//     width: 100px;
// }

// ul.menu {
//     list-style: none;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: flex-end;
// }

// ul.menu a {
//     text-decoration: none;
//     color: grey;
//     font-size: 18px;
// }

// .headerWrapper {
//     display: grid;
//     grid-template-columns: 4fr 3fr;
// }

// div.userName {
//     display: flex;
//     justify-content: flex-end;
//     align-items: flex-end;
//     padding-right: 10%;
// }

// div.userName p {
//     background: #b1dfe7;
//     padding: 15px;
//     border-radius: 15px;
//     color: blue;
//     font-weight: 600;
// }

// .heroSection,
// .formSection,
// #booking {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     align-items: center;
//     gap: 10px
// }

// .formSection {
//     grid-template-columns: 1fr;
// }

// h1,
// h2 {
//     font-weight: bold;
//     color: #515050;
//     font-size: 3em;

// }

// .heroSection div {
//     padding: 10% 17%;
// }

// formSection div {
//     padding: 0 4%;
//     display: flex;
//     flex-direction: column;
// }

// .heroSection a {
//     text-decoration: none;
//     color: transparent
// }

// #booking {
//     padding: 0 8%;
// }

// .add_item {
//     border: none;
//     border-radius: 10px;
//     padding: 10px 25px;
// }

// .add_item i.removeItem {

//     color: red;

// }

// .add_item i.addItem {

//     color: blue;

// }

// h2 {
//     color: #00BFFF;
// }

// .heroSection p {
//     font-size: 1.13em;
//     color: grey;
//     font-weight: 400;
//     letter-spacing: 1px;
// }

// .heroSection button,
// .formSection button {
//     background: #00BFFF;
//     padding: 15px 30px;
//     border-radius: 15px;
//     color: white;
//     font-weight: 600;
//     border: none;
//     font-size: 1.13em;
//     cursor: pointer;
// }

// .formSection button {
//     padding: 10px 15px;
// }

// .heroSection img {
//     width: 60%;
// }

// .formBox,
// .colorBox {
//     border: 2px solid #b1dfe7;
//     border-radius: 15px;
//     box-shadow: 5px 5px 10px grey;
//     margin-top: 20px;
//     margin-bottom: 20px;
//     margin-left: 20px;
// }

// .formBox form {
//     padding: 20px;
// }

// .formBox label {
//     font-size: 1.13em;
//     color: grey;
//     font-weight: 400;
//     letter-spacing: 1px;
// }

// .formBox input {
//     display: block;
//     margin-top: 10px;
//     padding: 10px;
//     width: 90%;
//     border-radius: 10px;
//     border: 1px solid grey;
//     font-size: 1em;
// }

// .formBox input:focus {
//     outline: none;
//     border: 2px solid #00BFFF;
//     margin-left: 20px;
// }

// .headBand {
//     background: #b1dfe7;
//     padding: 15px;
//     color: blue;
//     font-weight: 600;
//     color: black;
//     text-align: center
// }

// .colorBox {
//     box-shadow: -3px 3px 10px 4px grey;
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 10px;
//     padding: 20px !important;
//     text-align: center;
//     flex-direction: row;
//     width: 90%;
//     row-gap: 20px;
// }

// .colorBox div {
//     height: 130px;
//     row-gap: 20px;
//     border-radius: 20px;
//     border: 2px solid grey;
//     text-align: center;
//     vertical-align: middle;
//     font-size: 1.5em;
//     line-height: 50px;

// }

// #red {
//     background: white;
//     cursor: pointer;
//     color: red
// }

// #blue {
//     background: white;
//     cursor: pointer;
//     color: blue
// }


// #green {
//     background: white;
//     cursor: pointer;
//     color: green;
// }

// #yellow {
//     background: white;
//     cursor: pointer;
//     color: rgb(130, 130, 20)
// }

// #red.full {
//     background: red;
//     color: black
// }

// #blue.full {
//     background: blue;
//     color: black
// }

// #green.full {
//     background: green;
//     color: black
// }

// #yellow.full {
//     background: yellow;
//     color: black
// }

// .services {
//     display: grid;
//     grid-template-columns: 1fr;
//     padding: 0 10px
// }

// .bookingSection p {
//     color: red;
//     display: block;
//     font-size: 13px;
//     text-align: left;
//     padding-left: 5%;
// }

// .qualitySection ul {
//     list-style: none;
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr 1fr;
//     gap: 20px;
//     text-align: center;
// }

// .newsletterSection {
//     display: grid;
//     grid-template-columns: 3fr 2fr;
//     background-color: #00BFFF;
//     padding: 5% 17%
// }

// .newsletterSection h2 {
//     color: white;
//     padding: 20px 0 0 20px;
//     text-align: left;
// }

// form.newsletterForm div {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap:10px
// }

// .serviceSection {
//     display: grid;
//     grid-template-columns: 4fr 4fr;
//     background-color: #00BFFF;
// }
// .footerWrapper{
//     display: grid
// ;
//     grid-template-columns: 1fr 1fr 1fr 1fr;
//     gap:5%;
//     padding: 5% 10%;
//     align-items: flex-start;
// }
// .footerWrapper h4{
//         font-size: 14px;
//     font-weight: 400;
// }
// .importantLinks ul{
//     list-style: none;
//     padding: 0;
// }
// .importantLinks a{
//     text-decoration: none;
//     color:black
// }
// .serviceSection h2 {
//     color: #000;
//     padding: 20px 0 0 20px;
// }

// .serviceSection p {
//     color: #000;
//     padding: 0 20px 20px 20px;
//     margin: 0
// }

// .serviceSection p span {
//     font-size: 30px;
//     font-weight: bold;
// }

// .serviceDetails {
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
// }

// .services .items {
//     display: flex;
//     flex-direction: column;
// }

// .services .items ul {
//     display: flex;
//     list-style: none;
//     flex-direction: row;
//     padding: 0;
//     /* grid-template-columns: 1fr 1fr;
//   grid-auto-flow: column;   put items in columns */
//     justify-content: space-between;

// }

// .addItem,
// .formSection,
// .services {
//     border: 2px solid #b1dfe7;
//     border-radius: 15px;
//     box-shadow: 5px 5px 10px grey;
//     margin-top: 20px;
// }

// .formSection {
//     padding: 5% 10px;
// }

// form.forms div:first-child {
//     display: grid;
//     grid-template-columns: 1fr;
//     justify-content: space-between;
//     align-items: self-start;
// }

// form.forms div:nth-child(2) {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 10px;
//     justify-content: space-between;
//     align-items: self-start;
// }

// form.forms div label {
//     margin-bottom: 10px;

// }

// form.forms div input, form.newsletterForm input,form.newsletterForm button{
//     width: 100%;
//     padding: 10px;
//     border-radius: 5px;
//     border-color: #eeeeee;
//     margin-top: 10px;
// }

// form.forms button {
//     width: 70%;
//     margin-top: 20px;
//     padding: 15px;
//     border-radius: 10px;
//     border: none;
//     background-color: #1d4350;
//     color: white;
//     font-weight: bold;
//     font-size: 16px;
//     cursor: pointer;
// }

// .addItem {
//     padding-top: 3%;
// }

// .addItem h3 {
//     text-align: center;
//     font-size: 14px;
//     font-weight: bold;
// }

// .formSection h4 {
//     font-size: 14px;
// }

// .addItem #cartItemsList {
//     list-style: none;
//     padding: 0;
//     display: flex;
//     justify-content: space-between;
//     font-weight: 600;
//     background-color: #eeeeee;
//     padding: 10px
// }

// .addItem .cart-row {
//     list-style: none;
//     padding: 0;
//     display: flex;
//     justify-content: space-between;
//     border-bottom: 1px solid #eeeeee;
//     padding: 0 15px;
// }

// .addItem p {
//     text-align: center;
//     display: block;
// }

// #itemFound {
//     display: none;
// }

// .remove_item {
//     background-color: #efdede6e !important;
//     color: red !important;
//     font-weight: bold !important;
//     border: none;
//     border-radius: 10px;
//     padding: 10px 25px;

// }

// .add_item {
//     background-color: #eeeeee;
//     color: black;
//     font-weight: 400;
// }

// @media (max-width: 768px) {

//     .headerWrapper {
//         grid-template-columns: 1fr 1fr;
//         row-gap: 20px;
//         text-align: center;
//     }

//     .heroSection div,
//     .formSection div {
//         padding: 0 5%;
//     }

//     .heroSection,
//     .formSection {
//         grid-template-columns: 1fr;
//         text-align: center;
//     }

//     .heroSection img {
//         width: 80%;
//         margin-top: 20px;
//         margin-bottom: 20px;
//     }

//     .formSection div {
//         padding: 5%;
//     }

//     ul.menu {
//         order: 3;
//         width: 100%;
//         flex-direction: column;
//         align-items: flex-start;
//         justify-content: space-between;
//     }

//     div.userName {
//         justify-content: center;
//         padding: 0;
//     }
// }
//     </style>
// </head>

// <body>
   

//    <body>
//     <header>

//         <div class="container-fluid">
//             <div class="headerWrapper">
//                 <ul class="menu">
//                     <li><a href="/home">Home</a></li>
//                     <li><a href="/aboutus">About Us</a></li>
//                     <li><a href="/contact">Contact Us</a></li>
//                 </ul>
//                 <div class="userName"> <p>Deepa</p></div>
               
//             </div>
//         </div>
//     </header>

//     <section class="heroSection">
//         <div>
//             <h1>Revitalize Your Clothes with Expert</h1>    
//             <h2>Laundary Services!</h2>
//             <p>Experience hassle-free laundry with our professional washing, drying, ironing, and dry-cleaning services.
//                 We ensure your clothes are treated with care, delivered fresh, neatly folded, and always on time.
//                 Perfect for busy professionals, families, and anyone who values convenience and quality.</p>
//             <button>Book a service today!</button>
//         </div>
//         <div>
//         </div>
//     </section>
// </body>
// </body>

// </html>`)
// res.end()

})

server.listen(PORT ,()=>{
    console.log(`Server starting on ${PORT}`)
})