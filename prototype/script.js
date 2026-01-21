// Product Switcher
document.addEventListener('DOMContentLoaded', function() {
    const customerViews = {
        'atlas': document.getElementById('atlas-view'),
        'financial-accounts': document.getElementById('financial-accounts-view'),
        'stripe-apps': document.getElementById('stripe-apps-view')
    };
    const navMenus = {
        'atlas': document.getElementById('atlas-nav'),
        'financial-accounts': document.getElementById('financial-accounts-nav'),
        'stripe-apps': document.getElementById('stripe-apps-nav')
    };

    // Function to switch between product views
    function switchProduct(productType) {
        // Hide all views
        Object.values(customerViews).forEach(view => {
            view.classList.remove('active');
        });

        // Hide all nav menus
        Object.values(navMenus).forEach(nav => {
            nav.style.display = 'none';
        });

        // Show selected view with fade-in effect
        customerViews[productType].classList.add('active');

        // Show selected nav menu
        navMenus[productType].style.display = 'flex';

        // Scroll to top of content
        document.querySelector('.content').scrollTop = 0;

        // Add subtle animation
        customerViews[productType].style.opacity = '0';
        setTimeout(() => {
            customerViews[productType].style.transition = 'opacity 0.3s';
            customerViews[productType].style.opacity = '1';
        }, 10);
    }

    // Handle dropdown clicks in navigation
    const navItemDropdowns = document.querySelectorAll('.nav-item-dropdown');

    navItemDropdowns.forEach(dropdown => {
        const navItem = dropdown.querySelector('.nav-item');

        // Toggle dropdown on click
        navItem.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            // Close other dropdowns
            navItemDropdowns.forEach(d => {
                if (d !== dropdown) {
                    d.classList.remove('active');
                }
            });

            // Toggle this dropdown
            dropdown.classList.toggle('active');
        });
    });

    // Handle dropdown menu item clicks
    const dropdownItems = document.querySelectorAll('.nav-dropdown-item');

    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const productType = this.getAttribute('data-product');

            // Close all dropdowns
            navItemDropdowns.forEach(d => d.classList.remove('active'));

            // Switch to selected product
            switchProduct(productType);
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-item-dropdown')) {
            navItemDropdowns.forEach(d => d.classList.remove('active'));
        }
    });

    // Add hover effects to modules
    const modules = document.querySelectorAll('.module');
    modules.forEach(module => {
        module.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });

        module.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click animations to buttons
    const buttons = document.querySelectorAll('.btn, .btn-link');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Don't prevent default for now (prototype)
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.animation = 'ripple 0.6s ease-out';

            // Position relative to button
            const rect = this.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left - 10) + 'px';
            ripple.style.top = (e.clientY - rect.top - 10) + 'px';

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Animate progress bars on load
    const progressBars = document.querySelectorAll('.progress-fill, .category-fill, .bar');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0%';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    progressBars.forEach(bar => observer.observe(bar));

    // Simulate real-time updates for transaction list (Financial Accounts view)
    function addTransactionAnimation() {
        const transactionList = document.querySelector('#financial-accounts-view .transaction-list');
        if (!transactionList) return;

        const firstTransaction = transactionList.querySelector('.transaction-item');
        if (firstTransaction) {
            // Add subtle pulse animation
            setInterval(() => {
                firstTransaction.style.animation = 'pulse-bg 2s ease-in-out';
                setTimeout(() => {
                    firstTransaction.style.animation = '';
                }, 2000);
            }, 10000);
        }
    }

    // Add CSS for pulse animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            from {
                transform: scale(0);
                opacity: 1;
            }
            to {
                transform: scale(10);
                opacity: 0;
            }
        }

        @keyframes pulse-bg {
            0%, 100% {
                background: transparent;
            }
            50% {
                background: rgba(99, 91, 255, 0.05);
            }
        }
    `;
    document.head.appendChild(style);

    addTransactionAnimation();

    // Add interactive tooltips (simple version)
    const badges = document.querySelectorAll('.badge');
    badges.forEach(badge => {
        badge.style.cursor = 'help';
        badge.title = badge.textContent.trim();
    });

    // Simulate loading states for metrics
    function animateMetrics() {
        const metricValues = document.querySelectorAll('.metric-value');
        metricValues.forEach(metric => {
            const finalValue = metric.textContent;
            metric.textContent = '---';
            setTimeout(() => {
                metric.style.transition = 'opacity 0.3s';
                metric.style.opacity = '0';
                setTimeout(() => {
                    metric.textContent = finalValue;
                    metric.style.opacity = '1';
                }, 150);
            }, Math.random() * 500 + 200);
        });
    }

    // Uncomment to see metrics animation on load
    // animateMetrics();

    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Alt + 1, 2, 3 to switch between views
        if (e.altKey) {
            let productType = null;
            switch(e.key) {
                case '1':
                    productType = 'atlas';
                    break;
                case '2':
                    productType = 'financial-accounts';
                    break;
                case '3':
                    productType = 'stripe-apps';
                    break;
            }

            if (productType) {
                switchProduct(productType);
            }
        }
    });

    // Add click handlers for "Launch" buttons in Stripe Apps view
    const launchButtons = document.querySelectorAll('#stripe-apps-view .btn-sm');
    launchButtons.forEach(button => {
        if (button.textContent === 'Launch') {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const appCard = this.closest('.app-card');
                const appName = appCard.querySelector('.app-name').textContent;

                // Add visual feedback
                this.textContent = 'Launching...';
                this.disabled = true;

                setTimeout(() => {
                    this.textContent = 'Launch';
                    this.disabled = false;
                    // In a real app, would open the app here
                    console.log(`Would launch: ${appName}`);
                }, 1000);
            });
        }
    });

    // Add install button handlers
    const installButtons = document.querySelectorAll('.marketplace-card .btn-primary');
    installButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.marketplace-card');
            const appName = card.querySelector('.marketplace-name').textContent;

            // Visual feedback
            const originalText = this.textContent;
            this.textContent = 'Installing...';
            this.disabled = true;

            setTimeout(() => {
                this.textContent = '✓ Installed';
                this.style.background = '#059669';
                setTimeout(() => {
                    this.textContent = originalText;
                    this.disabled = false;
                    this.style.background = '';
                }, 2000);
            }, 1500);
        });
    });

    // Smooth scroll for "view all" links
    const viewAllLinks = document.querySelectorAll('.view-all-link');
    viewAllLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real app, would navigate to detailed view
            console.log('Navigate to:', this.textContent);
        });
    });

    // Console welcome message
    console.log('%c🎨 Stripe Dashboard Prototype', 'font-size: 20px; font-weight: bold; color: #635BFF;');
    console.log('%cKeyboard shortcuts:', 'font-weight: bold; margin-top: 10px;');
    console.log('Alt + 1: Atlas view');
    console.log('Alt + 2: Financial Accounts view');
    console.log('Alt + 3: Stripe Apps view');
});
