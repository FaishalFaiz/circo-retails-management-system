function initDashboardLayout(activePage) {
    // Load Sidebar
    $('#sidebar-container').load('components/sidebar.html', function() {
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
        $('#sidebar-toggle').on('click', function() {
            $('#sidebar').toggleClass('collapsed');
            if ($('#sidebar').hasClass('collapsed')) {
                $('#main-content').css('margin-left', '70px');
            } else {
                $('#main-content').css('margin-left', '230px');
            }
        });

        // Submenu Produk Toggle
        $('#menu-produk-toggle').on('click', function() {
            if ($('#sidebar').hasClass('collapsed')) {
                $('#sidebar').removeClass('collapsed');
                $('#main-content').css('margin-left', '230px');
            }
            $('#produk-submenu').toggleClass('hidden');
            $(this).find('.chevron-icon').toggleClass('rotate-180');
        });

        // Mobile Close Button
        $('#sidebar-close-mobile').on('click', function() {
            $('#sidebar').removeClass('mobile-open');
            $('#sidebar-backdrop').fadeOut(200);
        });
    });

    // Load Topbar
    $('#topbar-container').load('components/topbar.html', function() {
        // Mobile Hamburger Toggle
        $(document).on('click', '#mobile-menu-btn', function() {
            $('#sidebar').addClass('mobile-open');
            $('#sidebar-backdrop').fadeIn(200);
        });
    });

    // Backdrop Mobile Click
    $(document).on('click', '#sidebar-backdrop', function() {
        $('#sidebar').removeClass('mobile-open');
        $(this).fadeOut(200);
    });

    // Responsive window check
    $(window).on('resize', function() {
        if ($(window).width() >= 768) {
            $('#sidebar-backdrop').hide();
            $('#sidebar').removeClass('mobile-open');
            if ($('#sidebar').hasClass('collapsed')) {
                $('#main-content').css('margin-left', '70px');
            } else {
                $('#main-content').css('margin-left', '230px');
            }
        } else {
            $('#main-content').css('margin-left', '0');
        }
    });
}
