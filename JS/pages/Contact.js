export default class Contact {
  constructor() {
    this.nameValidator = false;
    this.emailValidator = false;
    this.phoneValidator = false;
    this.ageValidator = false;
    this.passwordValidator = false;
    this.repasswordValidator = false;
  }
  displayContactForm() {
    $('#contact-us').click(() => {
      this.inputValidator()

      let content =
        `
          <form id="form" class="d-flex flex-column vh-100  justify-content-center align-items-center">
                <div class="row justify-content-center">
                  <div class="col-md-5 mb-3">
                    <input type="text" class="form-control" placeholder="Enter Your Name" id="user-name">
                    <p class="bg-danger bg-opacity-10 mt-3 p-2 text-danger"> Only text allowed 
                    </p>
                  </div>
                  <div class="col-md-5 mb-3">
                    <input type="email" class="form-control" placeholder="Enter Your Email" id="user-mail">
                    <p class="bg-danger bg-opacity-10 mt-3 p-2 text-danger">Email not valid *exemple@yyy.zzz
                    </p>
                  </div>
                  <div class="col-md-5 mb-3">
                    <input type="number" class="form-control" placeholder="Enter Your Phone" id="user-phone">
                    <p class="bg-danger bg-opacity-10 mt-3 p-2 text-danger">Enter valid Phone Number
                    </p>
                  </div>
                  <div class="col-md-5 mb-3">
                    <input type="number" class="form-control" placeholder="Enter Your Age" id="user-age">
                    <p class="bg-danger bg-opacity-10 mt-3 p-2 text-danger">Enter valid age
                    </p>
                  </div>
                  <div class="col-md-5 mb-3">
                    <input type="password" class="form-control" placeholder="Enter Your Password" id="user-password">
                    <p class="bg-danger bg-opacity-10 mt-3 p-2 text-danger">Enter valid password *Minimum eight
                      characters, at
                      least one letter and one number:*
                    </p>
                  </div>
                  <div class="col-md-5 mb-3">
                    <input type="password" class="form-control" placeholder="Repeat the password" id="user-repassword">
                    <p class="bg-danger bg-opacity-10 mt-3 p-2 text-danger">Password not mach
                    </p>
                  </div>
                </div>
                <button class="btn btn-outline-info disabled"> submit </button>
              </form>
        `

      $('#content').html(content)
      this.isValid()

    })
  }

  inputValidator() {
    $(() => { // getting document ready
      // email inputValidator
      $('#user-name').keyup((e) => {
        let regEx = /^[A-Za-z\s]+$/
        if ($('#user-name').val().match(regEx)) {
          $('#user-name').next().slideUp()
          this.nameValidator = true;
        } else {
          $('#user-name').next().slideDown()
          this.mailValidator = false
        }
      });
      // email inputValidator
      $('#user-mail').keyup((e) => {
        let regEx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm
        if ($('#user-mail').val().match(regEx)) {
          $('#user-mail').next().slideUp()
          this.emailValidator = true;
        } else {
          $('#user-mail').next().slideDown()
          this.emailValidator = false
        }
      });

      // phone inputValidator
      $('#user-phone').keyup((e) => {
        let regEx = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{5})(?: *x(\d+))?\s*$/gm
        if ($('#user-phone').val().match(regEx)) {
          $('#user-phone').next().slideUp()
          this.phoneValidator = true;
        } else {
          $('#user-phone').next().slideDown()
          this.phoneValidator = false
        }
      });

      // age inputValidator
      $('#user-age').keyup((e) => {
        if (18 <= $('#user-age').val() && $('#user-age').val() <= 100 && $('#user-age').val() != '') {
          console.log($('#user-age').val());
          $('#user-age').next().slideUp()
          this.ageValidator = true;
        } else {
          $('#user-age').next().slideDown()
          this.ageValidator = false
        }
      });

      // password inputValidator
      $('#user-password').keyup((e) => {
        let regEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/gm
        if ($('#user-password').val().match(regEx)) {
          $('#user-password').next().slideUp()
          this.passwordValidator = true;
        } else {
          $('#user-password').next().slideDown()
          this.passwordValidator = false
        }
      });

      // rePassword inputValidator
      $('#user-repassword').keyup((e) => {
        if ($('#user-repassword').val() === $('#user-password').val()) {
          $('#user-repassword').next().slideUp()
          this.repasswordValidator = true;
        } else {
          $('#user-repassword').next().slideDown()
          this.repasswordValidator = false
        }
      });
    });


  }

  // is valid function

  isValid() {
    $(document).keyup(() => {
      if (
        this.nameValidator == true &&
        this.emailValidator == true &&
        this.phoneValidator == true &&
        this.ageValidator == true &&
        this.passwordValidator == true &&
        this.repasswordValidator == true
      ) {
        $('form button').removeClass('disabled')
      } else {
        console.log('no');
        $('form button').addClass('disabled')
      }
    });

  }
}

