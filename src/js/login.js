import $ from 'jquery';
import './dashboard';

$('#sign-in').click(function(){
    $('#login-view').addClass('hide');
    $('#dashboard-view').removeClass('hide');
    $('#dashboard').addClass('active');

    $('#manage-customer-content').addClass('hide');
});

//Dashboard button event
$('#dashboard').click(function(){

    $('#dashboard-content').removeClass('hide');

    $('#manage-customer-content').addClass('hide');
    $('#manage-item-content').addClass('hide');
    $('#place-order-content').addClass('hide');
    $('#search-orders-content').addClass('hide');

    $('#dashboard').addClass('active');

    $('#manage-customers').removeClass('active');
    $('#manage-items').removeClass('active');
    $('#place-order').removeClass('active');
    $('#search-orders').removeClass('active');

    $('#current-header').text("Dashboard");

});

//Manage Customer button event
$('#manage-customers').click(function(){

    $('#manage-customer-content').removeClass('hide');

    $('#dashboard-content').addClass('hide');
    $('#manage-item-content').addClass('hide');
    $('#place-order-content').addClass('hide');
    $('#search-orders-content').addClass('hide');
    

    $('#manage-customers').addClass('active');

    $('#dashboard').removeClass('active');
    $('#manage-items').removeClass('active');
    $('#place-order').removeClass('active');
    $('#search-orders').removeClass('active');

    $('#current-header').text("Manage Customers");

});

//Manage Items button event
$('#manage-items').click(function(){

    $('#manage-item-content').removeClass('hide');

    $('#dashboard-content').addClass('hide');
    $('#manage-customer-content').addClass('hide');
    $('#place-order-content').addClass('hide');
    $('#search-orders-content').addClass('hide');

    $('#manage-customers').addClass('active');

    $('#dashboard').removeClass('active');
    $('#manorderage-customers').removeClass('active');
    $('#place-').removeClass('active');
    $('#search-orders').removeClass('active');

    $('#current-header').text("Manage Items");

});

//Place Order button event
$('#place-order').click(function(){

    $('#manage-customer-content').removeClass('hide');

    $('#dashboard-content').addClass('hide');
    $('#manage-customer-content').addClass('hide');
    $('#manage-item-content').addClass('hide');
    $('#search-orders-content').addClass('hide');

    $('#place-order').addClass('active');

    $('#dashboard').removeClass('active');
    $('#manage-customers').removeClass('active');
    $('#manage-items').removeClass('active');
    $('#search-orders').removeClass('active');

    $('#current-header').text("Place Order");

});

//Search Orders button event
$('#search-orders').click(function(){

    $('#search-orders-content').removeClass('hide');

    $('#dashboard-content').addClass('hide');
    $('#manage-customer-content').addClass('hide');
    $('#manage-item-content').addClass('hide');
    $('#place-order-content').addClass('hide');

    $('#search-orders').addClass('active');

    $('#dashboard').removeClass('active');
    $('#manage-customers').removeClass('active');
    $('#manage-items').removeClass('active');
    $('#place-orders').removeClass('active');

    $('#current-header').text("Search Orders");

});
