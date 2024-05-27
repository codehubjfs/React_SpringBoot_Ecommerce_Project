import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import 'jquery-validation'; // Import jQuery Validation plugin
import 'toastr/build/toastr.min.css'; // Import toastr CSS
import toastr from 'toastr'; // Import toastr
import './PaymentForm.css';
import {Link} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import YourOrders from "../pages/YourOrders";



const PaymentForm = ({categoryId, productId, selectedColor, selectedSize, selectedStorage, selectedContent, history }) => {


    useEffect(() => {
        // Initialize jQuery validation
        const validator=$('#paymentForm').validate({
            rules: {
                CardNumber: {
                    validateCardNumber: true,
                    maxlength: 16,
                    minlength: 16,
                    required: true,
                    digits: true,

                },
                ExpiryMonth: {
                    required: true,
                    date: true
                },
                CVV: {
                    validateCVV: true,
                    minlength: 3,
                    maxlength: 3,
                    required: true,
                    digits: true,
                     // Custom method to check if the input is a valid CVV
                },
                NameOnCard: {
                    minlength: 3,
                    maxlength: 50,
                    required: true,
                    alphabetsOnly: true,
                     // Custom method to check if the input contains only alphabets

                },
                otp: {
                    validateOTP: true,
                    minlength: 6,
                    maxlength: 6,
                    required: true,
                    digits: true,
                     // Custom method to check if the input is a valid OTP
                }
            },
            messages: {
                // Define custom error messages for each field
                CardNumber: {
                    required: "Please enter your card number",
                    digits: "Please enter a valid card number",
                    maxlength: "Check Your Card Number",
                    minlength: "Please enter the 16 digits",
                    validateCardNumber: "Please enter a valid card number"
                },
                ExpiryMonth: {
                    required: "Please enter your expiry month",
                    date: "Please enter a valid expiry month"
                },
                CVV: {
                    required: "Please enter your CVV code",
                    digits: "Please enter a valid CVV code",
                    minlength: "Please enter exactly 3 digits",
                    maxlength: "Please enter exactly 3 digits",
                    validateCVV: "Please enter a valid CVV code"
                },
                NameOnCard: {
                    required: "Please enter your name on card",
                    alphabetsOnly: "Please enter only alphabets",
                    minlength: "Please enter at least 3 characters",
                    maxlength: "Please enter no more than 50 characters"
                },
                otp: {
                    required: "Please enter your OTP",
                    digits: "Please enter a valid OTP",
                    minlength: "Please enter exactly 6 digits",
                    maxlength: "Please enter exactly 6 digits",
                    validateOTP: "Please enter a valid OTP"
                }
            },
            errorPlacement: function(error, element) {
                // Custom error placement to handle label
                error.insertAfter($(element).closest('.form__div'));
            },
            submitHandler: function(form) {
                var otp = $('#otp').data('otp');
                var otp_inp = $('#otp').val();
                if (otp_inp == otp) {
                    // Payment success toast
                    toastr.success('Payment Complete', 'Success');
                    // Redirect to orders page
                    window.location.href = "your_orders.html";
                } else {
                    // Payment failure toast
                    toastr.error('Payment Failed', 'Error');
                }
            }
        });

        $.validator.addMethod("validateCardNumber", function(value, element) {
            // Validate if the input is a valid card number (only digits)
            return /^\d+$/.test(value);
        }, "Please enter a valid card number");

        $.validator.addMethod("validateCVV", function(value, element) {
            // Validate if the input is a valid CVV (only digits)
            return /^\d+$/.test(value);
        }, "Please enter a valid CVV code");

        $.validator.addMethod("validateOTP", function(value, element) {
            // Validate if the input is a valid OTP (only digits)
            return /^\d+$/.test(value);
        }, "Please enter a valid OTP");

        $.validator.addMethod("alphabetsOnly", function(value, element) {
            // Validate if the input contains only alphabets
            return /^[A-Za-z\s]+$/.test(value);
        }, "Please enter only alphabets");


        // Event listener for OTP button click
        $('#otp_btn').click(function() {
            var otp = generateOTP();
            $('#otp').data('otp', otp);
            toastr.info('Your OTP is ' + otp, 'OTP Generated');
        });

        // Function to generate OTP
        function generateOTP() {
            var digits = '0123456789';
            var otpLength = 6;
            var OTP = '';
            for (let i = 0; i < otpLength; i++) {
                OTP += digits[Math.floor(Math.random() * 10)];
            }
            return OTP;
        }

        // Initialize toastr
        toastr.options = {
            "closeButton": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": true,
            "timeOut": 3000
        };

        // Custom validation trigger on focus
        $('.form-control').focusin(function() {
            $(this).valid();
        });
        return () => {
            validator.destroy(); // Destroy the validator instance
            $('#otp_btn').off('click'); // Remove click event handler for OTP button
        };
    }, []); // Run once on component mount

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="card p-3">
                        <div className="collapse show p-3 pt-0" id="collapseExample2">
                            <form id="paymentForm" className="form">
                                <legend className="text-center">Payment</legend>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form__div">
                                            <br/>
                                            <label htmlFor="CardNumber">Card Number<span style={{color: 'red'}}>*</span></label>
                                            <input type="text" className="form-control" placeholder="Card number"
                                                   id="CardNumber" name="CardNumber" required/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form__div">
                                            <br/>
                                            <label htmlFor="ExpiryMonth">Expiry month<span
                                                style={{color: 'red'}}>*</span></label>
                                            <input type="Month" className="form-control" placeholder="MM"
                                                   id="ExpiryMonth" name="ExpiryMonth" required/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form__div">
                                            <br/>
                                            <label htmlFor="CVV">CVV code<span style={{color: 'red'}}>*</span></label>
                                            <input type="password" className="form-control" placeholder="CVV" id="CVV"
                                                   name="CVV" required/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form__div">
                                            <br/>
                                            <label htmlFor="NameOnCard">Name on card<span
                                                style={{color: 'red'}}>*</span></label>
                                            <input type="text" className="form-control" placeholder="Name on card"
                                                   id="NameOnCard" name="NameOnCard" required/>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="col-12">
                                        <div className="form__div">
                                            <br/>
                                            <label htmlFor="otp">OTP<span style={{color: 'red'}}>*</span></label>
                                            <input type="text" className="form-control" placeholder="OTP" id="otp"
                                                   name="otp" required/>
                                        </div>
                                        <br/>
                                        <a href="#" id="otp_btn">Get OTP</a>
                                    </div>
                                    <Link to="/your-orders/:categoryId?/:productId?" className="btn btn-primary w-100">
                                        Submit Payment
                                    </Link>
                                        {/*<button type="button" className="btn btn-primary w-100" onClick={YourOrders}>
                                            Submit Payment
                                        </button>
*/}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default   PaymentForm;