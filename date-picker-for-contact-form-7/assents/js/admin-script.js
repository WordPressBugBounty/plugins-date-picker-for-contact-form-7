jQuery( document ).ready(function() {
    
    function change_minval(){
        
        var min_type = jQuery('.min_type').val();
        if(min_type=='set_date'){
            jQuery('.min_set_date_upper').removeClass('gmdpcf-hidden');
            jQuery('.min_current_upper').addClass('gmdpcf-hidden');
            jQuery('.min_field_name_upper').addClass('gmdpcf-hidden');
            var myval = 'set_date';
            if(jQuery('.min_set_date').val()!=''){
                myval = myval+'|'+jQuery('.min_set_date').val();
            }
            jQuery('.min_val').val(myval);

        }else if(min_type=='current'){
            jQuery('.min_set_date_upper').addClass('gmdpcf-hidden');
            jQuery('.min_current_upper').removeClass('gmdpcf-hidden');
            jQuery('.min_field_name_upper').addClass('gmdpcf-hidden');
            var myval = 'current';
            if(jQuery('.min_current_type').val()!=''){
                myval = myval+'|'+jQuery('.min_current_type').val();
            }
            if(jQuery('.min_current').val()!=''){
                myval = myval+'|'+jQuery('.min_current').val();
            }
            if(jQuery('.min_current_days').val()!=''){
                myval = myval+'|'+jQuery('.min_current_days').val();
            }
            jQuery('.min_val').val(myval);
        }else if(min_type=='field_name'){
            jQuery('.min_set_date_upper').addClass('gmdpcf-hidden');
            jQuery('.min_current_upper').addClass('gmdpcf-hidden');
            jQuery('.min_field_name_upper').removeClass('gmdpcf-hidden');
            var myval = 'field_name';
            if(jQuery('.min_field_name').val()!=''){
                myval = myval+'|'+jQuery('.min_field_name').val();
            }
            jQuery('.min_val').val(myval);
        }else{
            jQuery('.min_set_date_upper').addClass('gmdpcf-hidden');
            jQuery('.min_current_upper').addClass('gmdpcf-hidden');
            jQuery('.min_field_name_upper').addClass('gmdpcf-hidden');
            jQuery('.min_val').val("no_limit");
        }
       var $checkbox = jQuery('.min_val')
            .closest('form')
            .find('[data-tag-option="placeholder"]');

        $checkbox.trigger('click');
        $checkbox.trigger('click');
    }
    function change_maxval(){
        var max_type = jQuery('.max_type').val();
        if(max_type=='set_date'){
            jQuery('.max_set_date_upper').removeClass('gmdpcf-hidden');
            jQuery('.max_current_upper').addClass('gmdpcf-hidden');
            jQuery('.max_field_name_upper').addClass('gmdpcf-hidden');
            var myval = 'set_date';
            if(jQuery('.max_set_date').val()!=''){
                myval = myval+'|'+jQuery('.max_set_date').val();
            }
            jQuery('.max_val').val(myval);

        }else if(max_type=='current'){
            jQuery('.max_set_date_upper').addClass('gmdpcf-hidden');
            jQuery('.max_current_upper').removeClass('gmdpcf-hidden');
            jQuery('.max_field_name_upper').addClass('gmdpcf-hidden');
            var myval = 'current';
            if(jQuery('.max_current_type').val()!=''){
                myval = myval+'|'+jQuery('.max_current_type').val();
            }
            if(jQuery('.max_current').val()!=''){
                myval = myval+'|'+jQuery('.max_current').val();
            }
            if(jQuery('.max_current_days').val()!=''){
                myval = myval+'|'+jQuery('.max_current_days').val();
            }
            jQuery('.max_val').val(myval);
        }else if(max_type=='field_name'){
            jQuery('.max_set_date_upper').addClass('gmdpcf-hidden');
            jQuery('.max_current_upper').addClass('gmdpcf-hidden');
            jQuery('.max_field_name_upper').removeClass('gmdpcf-hidden');
            var myval = 'field_name';
            if(jQuery('.max_field_name').val()!=''){
                myval = myval+'|'+jQuery('.max_field_name').val();
            }
            jQuery('.max_val').val(myval);
        }else{
            jQuery('.max_set_date_upper').addClass('gmdpcf-hidden');
            jQuery('.max_current_upper').addClass('gmdpcf-hidden');
            jQuery('.max_field_name_upper').addClass('gmdpcf-hidden');
            jQuery('.max_val').val("no_limit");
        }
        var $checkbox = jQuery('.max_val')
            .closest('form')
            .find('[data-tag-option="placeholder"]');

        $checkbox.trigger('click');
        $checkbox.trigger('click');
       
    }
    jQuery('body').on('change', '.min_type', function() {
        change_minval();
    });
    jQuery('body').on('change', '.min_current_type', function() {
        change_minval();
    });
    jQuery('body').on('change', '.min_current', function() {
        change_minval();
    });
    jQuery('body').on('change', '.min_current_days', function() {
        change_minval();
    });
    jQuery('body').on('change', '.min_set_date', function() {
        change_minval();
    });
    jQuery('body').on('change', '.min_field_name', function() {
        change_minval();
    });

    
    
    jQuery('body').on('change', '.max_type', function() {
        change_maxval();
    });
    jQuery('body').on('change', '.max_current_type', function() {
        change_maxval();
    });
    jQuery('body').on('change', '.max_current', function() {
        change_maxval();
    });
    jQuery('body').on('change', '.max_current_days', function() {
        change_maxval();
    });
    jQuery('body').on('change', '.max_set_date', function() {
        change_maxval();
    });
    jQuery('body').on('change', '.max_field_name', function() {
        change_maxval();
    });

   
});