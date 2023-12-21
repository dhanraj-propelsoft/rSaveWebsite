
//contact js

// <!-- Reachus validation -->
    $(".numonly").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                return false;
            }
        });

            $(".alphaonly").on("input", function () { 
            var regexp = /[^a-zA-Z ]/g; 
            if ($(this).val().match(regexp)) 
                { 
                    $(this).val($(this).val().replace(regexp, '')); 
                 } 
            });


        $('input[type=text],input[type=password],select[IsValidate="true"],textarea').on('blur', function () {
            ValidateOnBlur(this);
        }).on('change', function () {
            ValidateOnBlur(this);
        });

        function ValidateOnBlur(e) {
            var a = e.id;
            ValidateCallCommon(a);
        };

    function ValidateCallCommon(a) {
            switch (a) {
                  // case 'ARNNO':
                  // {
                  //    IsARN('ARNNO');
                  //     break;
                  // }
                  case 'Name':
                    {
                        IsAlpha('Name');
                        break;
                    }
                    case 'Mobile':
                    {
                       IsMobile('Mobile');
                        break;
                    }
                case 'city':
                    {
                        IsAlpha('city');
                        break;
                    }
                // case 'state':
                //     {
                //         IsAlpha('state');
                //         break;
                //     }
                case 'EmailId':
                    {
                        IsEmail('EmailId');
                        break;
                    }
                // case 'Message':
                //     {
                //         IsBlank('Message');
                //         break;
                //     }
                
            }
        };

 function FormValid() {
            debugger;
            var count = 0;
            // if (!IsARN('ARNNO')) {
            //    count++;
            // }
            if (!IsAlpha('Name')) {
                count++;
            }
            if (!IsMobile('Mobile')){
              count++;
            }
            if (!IsAlpha('city')) {
                count++;
            }
            // if (!IsAlpha('state')) {
            //     count++;
            // }
            if (!IsEmail('EmailId')) {
                count++;
            }
            // if (!IsBlank('Message')) {
            //     count++;
            // }
            // if (!IsMobile('MobileNo')) {
            //     count++;
            // }
            
            if (count == 0) {
                return true;
            }
            else {

                return false;
            }
        };


         function DisplayMessage(e, msg, flag) {
            // debugger;
            var id = e;

            if (flag == 'false') {
                ////alert('call');
                $("#" + e).removeClass("clsSuccess");
                $("#" + e).addClass("clsError");

                if ($("#" + e).hasClass('adminLTSelect')) {
                    $("#" + e).parent().find(".select2-selection").removeClass("clsSuccess");
                    $("#" + e).parent().find(".select2-selection").addClass("clsError");
                }

                $("#" + id).attr('data-toggle', 'tooltip')
                    .attr('data-placement', 'bottom')
                    .attr('title', '')
                    .attr('data-original-title', msg)
                    .tooltip();

            }
            else if (flag == 'true') {

                $("#" + e).removeClass("clsError");
                $("#" + id).addClass("clsSuccess");

                if ($("#" + e).hasClass('adminLTSelect')) {
                    $("#" + e).parent().find(".select2-selection").removeClass("clsError");
                    $("#" + e).parent().find(".select2-selection").addClass("clsSuccess");
                }

                $("#" + id).attr('data-toggle', 'tooltip')
                    .attr('data-placement', 'bottom')
                    .attr('title', '')
                    .attr('data-original-title', msg)
                    .tooltip();
            }
            return true;
        }

        //     function IsARN(e) {
        //      var regex = new RegExp("^[0-9]{3,7}$");
        //     if (regex.test($("#" + e).val())) {

        //         DisplayMessage(e, '', 'true');
        //         return true;
        //     }
        //     else {
        //         DisplayMessage(e, 'Please enter a valid ARN Number', 'false');
        //         return false;
        //     }
        // }
        function IsBlank(e) {

            if ($("#" + e).val() != '') {

                DisplayMessage(e, '', 'true');
                return true;
            }
            else {
                DisplayMessage(e, 'Please enter your full name', 'false');
                return false;
            }
        }

         function IsMobile(e) {
            ////
            // var regex = new RegExp("^[789]\d{9}$");
            var regex = /^[6789]\d{9}/; // mobile no should start with 6,7,8,9
            if (regex.test($("#" + e).val()) && $("#" + e).val().length == 10) {

                DisplayMessage(e, '', 'true');
                return true;
            }
            else {
                DisplayMessage(e, 'Please enter a valid 10 digit mobile number', 'false');
                return false;
            }
        }

        function IsEmail(e) {

            //var regex = /^\w+([\.-]?\w+)*@\w+([\.]?\w+)*(\.\w{2,3})+$/;
            var regex = /^\w+([.-]\w+)*@\w+([.-]\w+)*(\.\w{2,4})+$/;

            if (regex.test($("#" + e).val())) {

                DisplayMessage(e, '', 'true');
                return true;

            }
            else {
                DisplayMessage(e, 'Please enter a Valid Email Address', 'false');
                return false;
            }
        }
        function IsAlpha(e) {
                     var regex = new RegExp("^[a-zA-Z ]{3,}$");
                    if (regex.test($("#" + e).val())) {

                        DisplayMessage(e, '', 'true');
                        return true;
                    }
                    else {
                        DisplayMessage(e, 'Please enter atleast 3 characters', 'false');
                        return false;
                    }
                }
