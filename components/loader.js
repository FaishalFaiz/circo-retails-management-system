function initDashboardLayout(activePage) {
    // Load Sidebar content into #sidebar
    $('#sidebar').load('components/sidebar.html', function() {
        // Set active menu highlight
        if (activePage) {
            $(`.sidebar-nav-item[data-page="${activePage}"]`).addClass('bg-blue-50 text-blue-600 font-semibold');
            
            // Highlight sub-item if on product page
            if (activePage === 'produk') {
                $('#produk-submenu').removeClass('hidden');
                $('#menu-produk-toggle').addClass('bg-blue-50 text-blue-600 font-semibold');
                $('#menu-produk-toggle .chevron-icon').addClass('rotate-180');
            }
        }

        // Toggle Sidebar Collapse (Desktop)
        $(document).off('click', '#sidebar-toggle').on('click', '#sidebar-toggle', function(e) {
            e.stopPropagation();
            $('#sidebar').toggleClass('collapsed');
            $('#main-content').toggleClass('sidebar-collapsed');
        });

        // Submenu Produk Toggle
        $(document).off('click', '#menu-produk-toggle').on('click', '#menu-produk-toggle', function(e) {
            e.stopPropagation();
            if ($('#sidebar').hasClass('collapsed')) {
                $('#sidebar').removeClass('collapsed');
                $('#main-content').removeClass('sidebar-collapsed');
            }
            $('#produk-submenu').toggleClass('hidden');
            $(this).find('.chevron-icon').toggleClass('rotate-180');
        });

        // Mobile Close Button
        $(document).off('click', '#sidebar-close-mobile').on('click', '#sidebar-close-mobile', function(e) {
            e.stopPropagation();
            $('#sidebar').removeClass('mobile-open');
            $('#sidebar-backdrop').fadeOut(200);
        });
    });

    // Load Topbar content into #topbar
    $('#topbar').load('components/topbar.html', function() {
        // Mobile Hamburger Toggle
        $(document).off('click', '#mobile-menu-btn').on('click', '#mobile-menu-btn', function(e) {
            e.stopPropagation();
            $('#sidebar').addClass('mobile-open');
            $('#sidebar-backdrop').fadeIn(200);
        });
    });

    // Backdrop Mobile Click
    $(document).off('click', '#sidebar-backdrop').on('click', '#sidebar-backdrop', function() {
        $('#sidebar').removeClass('mobile-open');
        $(this).fadeOut(200);
    });

    // Responsive window check
    $(window).on('resize', function() {
        if ($(window).width() >= 768) {
            $('#sidebar-backdrop').hide();
            $('#sidebar').removeClass('mobile-open');
        } else {
            $('#sidebar').removeClass('collapsed');
            $('#main-content').removeClass('sidebar-collapsed');
        }
    });
}
