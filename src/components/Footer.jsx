import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark">
        <div class="footer-area footer-padding fix">
          <div class="container">
            <div class="row d-flex justify-content-between">
              <div class="col-xl-5 col-lg-5 col-md-7 col-sm-12">
                <div class="single-footer-caption">
                  <div class="single-footer-caption">
                    <div class="footer-logo"></div>
                    <div class="footer-tittle">
                      <div class="footer-pera">
                        <h4>We Learn , We Share , We Code</h4>
                        <p>This Laboratory is for all coders</p>
                      </div>
                    </div>
                    <div class="footer-social">
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-pinterest-p"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="footer-logo d-flex justify-content-center col">
                <a href="#" class="">
                  <img class="col" src="assets\img\developer.webp" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom-area">
          <div class="container">
            <div class="footer-border">
              <div class="row d-flex align-items-center justify-content-between">
                <div class="col-lg-6">
                  <div class="footer-copy-right">
                    <p>
                      Copyright &copy;
                      <script>document.write(new Date().getFullYear());</script>
                      All rights reserved | CodeLab is Powered by CodeLab.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
