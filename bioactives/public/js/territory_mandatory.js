frappe.ui.form.on('Lead', {
    refresh: function(frm) {
        frm.set_df_property('territory', 'reqd', 1);
    }
});

frappe.ui.form.on('Opportunity', {
    refresh: function(frm) {
        frm.set_df_property('territory', 'reqd', 1);
    }
});

frappe.ui.form.on('Quotation', {
    refresh: function(frm) {
        frm.set_df_property('territory', 'reqd', 1);
    }
});