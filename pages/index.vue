<template>
<div>
  <div class="main-content fixed-top">
      <div class="side-nav">
        <div class="side-nav-inner nicescroll-container">
          <form action="#" class="side-nav-search-form">
            <div class="form-group search-field">
              <input
                type="text"
                class="search-field"
                name="search-field"
                placeholder="Search..."
              />
              <button class="side-nav-search-btn">
                <i class="fas fa-search"></i>
              </button>
            </div>
            <!-- End of .side-nav-search-form -->
          </form>
          <!-- End of .side-nav-search-form -->

          <div class="side-nav-content">
            <div class="row">
              <div class="col-lg-6">
                <ul
                  class="main-navigation side-navigation list-inline flex-column"
                >
                  <li><nuxt-link to="business.html">Business</nuxt-link></li>
                  <li><nuxt-link to="lifestyle.html">Lifestyle</nuxt-link></li>
                  <li><nuxt-link to="technology.html">Technology</nuxt-link></li>
                  <li><nuxt-link to="sports.html">Sports</nuxt-link></li>
                </ul>
                <!-- End of .main-navigation -->
              </div>
              <!-- End of  .col-md-6 -->

              <div class="col-lg-6">
                <div class="axil-contact-info-inner">
                  <!-- <h5 class="h5 m-b-xs-10">Contact Information</h5> -->
                  <div class="axil-contact-info">
                    <!-- <nuxt-linkddress class="address">
                      <p class="m-b-xs-30 mid grey-dark-three">
                        Theodore Lowe, Ap #867-859<br />Sit Rd, Azusa New York
                      </p>

                      <div class="h5 m-b-xs-5">
                        We're Available 24/ 7. Call Now.
                      </div>
                      <div>
                        <nuxt-link class="tel" to="tel:8884562790"
                          ><i class="fas fa-phone"></i>(888) 456-2790</a
                        >
                      </div>
                      <div>
                        <nuxt-link class="tel" to="tel:12125553333"
                          ><i class="fas fa-fax"></i>(121) 255-53333</a
                        >
                      </div>
                    </address> -->
                    <!-- End of address -->

                    <!-- <div class="contact-social-share m-t-xs-30">
                      <div class="axil-social-title h5">Follow Us</div>
                      <ul class="social-share social-share__with-bg">
                        <li>
                          <nuxt-link to="#"><i class="fab fa-facebook-f"></i></nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="#"><i class="fab fa-twitter"></i></nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="#"><i class="fab fa-behance"></i></nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="#"><i class="fab fa-linkedin-in"></i></nuxt-link>
                        </li>
                      </ul>
                    </div> -->
                    <!-- End of .contact-shsdf -->
                  </div>
                  <!-- End of .axil-contact-info -->
                </div>
                <!-- End of .axil-contact-info-inner -->
              </div>
            </div>
            <!-- End of .row -->
          </div>
        </div>
        <!-- End of .side-nav-inner -->

        <div class="close-sidenav" id="close-sidenav">
          <div></div>
          <div></div>
        </div>
      </div>
      <!-- End of .side-nav -->

          <!-- Header starts -->
      <header class="page-header">
        <nav class="navbar bg-grey-light-three navbar__style-three">
          <div class="container-fluid p-l-md-30 p-r-md-30">
            <div class="navbar-inner justify-content-between">
              <div class="brand-logo-container">
                <nuxt-link to="index.html">
                  <img
                    src="/demo/template/papr/assets/images/icon.png"
                    alt=""
                    class="brand-logo"
                  />
                </nuxt-link>
              </div>
              <!-- End of .brand-logo-container -->

              <div class="main-nav-wrapper">
                <ul class="main-navigation list-inline" id="main-menu">
                  <!-- <li class="has-dropdown is-active">
                    <nuxt-link to="#">Home</nuxt-link>
                    <ul class="submenu">
                      <li><nuxt-link to="index.html">Home One</nuxt-link></li>
                      <li><nuxt-link to="home-2.html">Home Two</nuxt-link></li>
                      <li><nuxt-link to="home-3.html">Home Three</nuxt-link></li>
                      <li><nuxt-link to="home-4.html">Home Four</nuxt-link></li>
                      <li class="is-active">
                        <nuxt-link to="home-5.html">Home Five</nuxt-link>
                      </li>
                    </ul>
                  </li> -->
                  <!-- <li class="has-dropdown">
                    <nuxt-link to="#">Posts</nuxt-link>
                    <ul class="submenu"> -->
                  <!-- <li class="has-dropdown">
                        <nuxt-link to="#">Post Layout</nuxt-link>
                        <ul class="submenu">
                          <li>
                            <nuxt-link to="post-layout-one.html">Post Layout 1</nuxt-link>
                          </li>
                          <li>
                            <nuxt-link to="post-layout-two.html">Post Layout 2</nuxt-link>
                          </li>
                          <li>
                            <nuxt-link to="post-layout-three.html">Post Layout 3</nuxt-link>
                          </li>
                          <li>
                            <nuxt-link to="post-layout-four.html">Post Layout 4</nuxt-link>
                          </li>
                          <li>
                            <nuxt-link to="post-layout-five.html">Post Layout 5</nuxt-link>
                          </li>
                        </ul> -->
                  <!-- End of .submenu -->
                  <!-- </li> -->
                  <!-- <li class="has-dropdown">
                        <nuxt-link to="#">Post Format</nuxt-link>
                        <ul class="submenu">
                          <li>
                            <nuxt-link to="post-format-standard.html"
                              >Post Format Standard</a
                            >
                          </li>
                          <li>
                            <nuxt-link to="post-format-video.html"
                              >Post Format Video</a
                            >
                          </li>
                          <li>
                            <nuxt-link to="post-format-audio.html"
                              >Post Format Audio</a
                            >
                          </li>
                          <li>
                            <nuxt-link to="post-format-gallery.html"
                              >Post Format Gallery</a
                            >
                          </li>
                          <li>
                            <nuxt-link to="post-format-quote.html"
                              >Post Format Quote</a
                            >
                          </li>
                          <li>
                            <nuxt-link to="post-format-text-only.html"
                              >Post Format Text Only</a
                            >
                          </li>
                        </ul>
                      </li> -->
                  <!-- </ul> -->
                  <!-- End of .submenu -->
                  <!-- </li> -->
                  <li><nuxt-link to="business.html">Business</nuxt-link></li>
                  <li><nuxt-link to="lifestyle.html">Lifestyle</nuxt-link></li>
                  <li><nuxt-link to="technology.html">Technology</nuxt-link></li>
                  <li><nuxt-link to="sports.html">Sports</nuxt-link></li>
                  <!-- <li class="has-dropdown">
                    <nuxt-link to="#">Pages</nuxt-link>
                    <ul class="submenu">
                      <li><nuxt-link to="author.html">Author</nuxt-link></li>
                      <li><nuxt-link to="error-404.html">404 Error</nuxt-link></li>
                      <li><nuxt-link to="under-construction.html">Coming Soon</nuxt-link></li>
                      <li><nuxt-link to="about-us.html">About Us</nuxt-link></li>
                      <li><nuxt-link to="team.html">Team</nuxt-link></li>
                      <li><nuxt-link to="contact.html">Contact Us</nuxt-link></li>
                    </ul>
                 End of .submenu 
                  </li> -->
                </ul>
                <!-- End of .main-navigation -->
              </div>
              <!-- End of .main-nav-wrapper -->

              <div class="navbar-extra-features">
                <form action="#" class="navbar-search">
                  <div class="search-field">
                    <input
                      type="text"
                      class="navbar-search-field"
                      placeholder="Search Here..."
                    />
                    <button class="navbar-search-btn" type="button">
                      <i class="fal fa-search"></i>
                    </button>
                  </div>
                  <!-- End of .search-field -->

                  <nuxt-link to="#" class="navbar-search-close"
                    ><i class="fal fa-times"></i
                  ></nuxt-link>
                </form>
                <!-- End of .navbar-search -->
                
                <nuxt-link
                  to="/"
                  class="nav-search-field-toggler"
                  data-toggle="nav-search-feild"
                  ><i class="far fa-search"></i
                ></nuxt-link>
                <nuxt-link to="/" class="side-nav-toggler" id="side-nav-toggler">
                  <span></span>
                  <span></span>
                  <span></span>
                </nuxt-link>
              </div>
              <!-- End of .navbar-extra-features -->

              <div
                class="main-nav-toggler d-block d-lg-none"
                id="main-nav-toggler"
              >
                <div class="toggler-inner">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <!-- End of .main-nav-toggler -->
            </div>
            <!-- End of .navbar-inner -->
          </div>
          <!-- End of .container -->
        </nav>
        <!-- End of .navbar -->
      </header>
      <!-- End of .page-header -->
  </div>
</div>
  </template>

<script>
export default {};
</script>
