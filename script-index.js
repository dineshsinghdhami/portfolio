 document.addEventListener("DOMContentLoaded", function(){
        const modal = document.getElementById("certModal");
        const modalImg = document.getElementById("modalImage");
        const closeBtn = document.querySelector(".close-btn");

        document.querySelectorAll(".cert-link").forEach(link=>{
            link.addEventListener("click",function(e){
                e.preventDefault();
                modal.style.display="flex";
                modalImg.src=this.getAttribute("href");
            });
        });

        closeBtn.addEventListener("click",function(){
            modal.style.display="none";
        });

        modal.addEventListener("click",function(e){
            if(e.target===modal){
                modal.style.display="none";
            }
        });

        const cards = document.querySelectorAll('.cert-card');
        cards.forEach((card) => {
            card.addEventListener('click', function() {
                this.style.backgroundColor = '#f3eadb';
                setTimeout(() => {
                    this.style.backgroundColor = '';
                }, 150);
            });
        });
 
        const nameH1 = document.querySelector('.identity h1');
        if(nameH1) {
            nameH1.addEventListener('mouseenter', () => {
                nameH1.style.transition = 'color 0.2s';
                nameH1.style.color = '#dbba95';
            });
            nameH1.addEventListener('mouseleave', () => {
                nameH1.style.color = '#fff';
            });
        }
    });

    function isMobileDevice() {
        return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    }

    function openDirectEmail() {
        const subject = "Contact From Portfolio";
        const body = "Hi Dinesh, I found your portfolio and would like to connect.";
        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(body);

        if (isMobileDevice()) {
            window.location.href = `mailto:dineshdhamidn@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
        } else {
            const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=dineshdhamidn@gmail.com&su=${encodedSubject}&body=${encodedBody}`;
            window.open(gmailURL, "_blank");
        }
    }

    function openWhatsApp() {
        const phoneNumber = "9779866109958"; 
        const message = "Hi Dinesh, I visited your portfolio and would like to connect.";
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, "_blank");
    }