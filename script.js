        // Enhanced threat data
        const threatsData = [
            {
                id: 'malware',
                title: 'Advanced Malware',
                icon: '🦠',
                severity: 'critical',
                description: 'Sophisticated malicious software including polymorphic viruses, fileless malware, and AI-powered threats.',
                details: {
                    definition: 'Modern malware encompasses a broad spectrum of malicious software designed to infiltrate, damage, or gain unauthorized access to computer systems using advanced evasion techniques.',
                    howItWorks: 'Contemporary malware employs multiple infection vectors, sandbox evasion, encryption, and living-off-the-land techniques to maintain persistence while avoiding detection.',
                    prevention: ['Next-generation antivirus with behavioral analysis', 'Application whitelisting', 'Regular system updates and patch management', 'Network segmentation and zero-trust architecture', 'Employee security awareness training'],
                    realWorldExample: 'The Lazarus Group\'s sophisticated malware campaigns have targeted financial institutions worldwide, stealing over $1 billion through advanced persistent threats.'
                }
            },
            {
                id: 'phishing',
                title: 'Advanced Phishing',
                icon: '🎣',
                severity: 'high',
                description: 'AI-enhanced phishing campaigns using deepfakes, social engineering, and personalized targeting.',
                details: {
                    definition: 'Modern phishing attacks leverage artificial intelligence, machine learning, and advanced social engineering to create highly convincing fraudulent communications.',
                    howItWorks: 'Attackers use scraped social media data, AI-generated content, and sophisticated impersonation techniques to craft personalized phishing campaigns with higher success rates.',
                    prevention: ['Multi-factor authentication implementation', 'Email security gateways with AI detection', 'Regular phishing simulation training', 'Domain-based Message Authentication (DMARC)', 'Security awareness programs'],
                    realWorldExample: 'The 2020 Twitter Bitcoin scam used social engineering to compromise high-profile accounts, demonstrating the evolution of phishing techniques.'
                }
            },
            {
                id: 'ransomware',
                title: 'Ransomware-as-a-Service',
                icon: '🔒',
                severity: 'critical',
                description: 'Industrialized ransomware operations with affiliate programs, double extortion, and supply chain targeting.',
                details: {
                    definition: 'Ransomware-as-a-Service (RaaS) represents the commercialization of ransomware, where criminal organizations operate like legitimate businesses with customer support and affiliate programs.',
                    howItWorks: 'RaaS operators develop ransomware tools and rent them to affiliates who conduct attacks, sharing profits while maintaining plausible deniability.',
                    prevention: ['Immutable backup strategies', 'Network segmentation with zero-trust', 'Endpoint detection and response (EDR)', 'Regular penetration testing', 'Incident response planning'],
                    realWorldExample: 'DarkSide RaaS was responsible for the Colonial Pipeline attack, demonstrating how ransomware groups target critical infrastructure.'
                }
            },
            {
                id: 'supply-chain',
                title: 'Supply Chain Attacks',
                icon: '🔗',
                severity: 'critical',
                description: 'Sophisticated attacks targeting software development pipelines, dependencies, and third-party vendors.',
                details: {
                    definition: 'Supply chain attacks compromise the software development and distribution process, allowing attackers to inject malicious code into legitimate software updates.',
                    howItWorks: 'Attackers infiltrate software vendors, open-source repositories, or hardware manufacturers to distribute compromised products to multiple targets simultaneously.',
                    prevention: ['Software composition analysis', 'Code signing verification', 'Vendor risk assessment programs', 'Software bill of materials (SBOM)', 'Secure development lifecycle'],
                    realWorldExample: 'The SolarWinds Orion platform compromise affected 18,000+ organizations, including government agencies and Fortune 500 companies.'
                }
            },
            {
                id: 'zero-day',
                title: 'Zero-Day Exploits',
                icon: '⚡',
                severity: 'critical',
                description: 'Unknown vulnerabilities exploited before patches are available, often sold on dark markets.',
                details: {
                    definition: 'Zero-day exploits target previously unknown software vulnerabilities, giving defenders no time to prepare defenses or deploy patches.',
                    howItWorks: 'Attackers discover vulnerabilities through reverse engineering, fuzzing, or purchasing exploits from underground markets before vendors become aware.',
                    prevention: ['Behavioral analysis and anomaly detection', 'Virtual patching through WAFs', 'Threat hunting programs', 'Bug bounty programs', 'Proactive vulnerability research'],
                    realWorldExample: 'Operation Aurora used Internet Explorer zero-days to target Google and other major corporations, highlighting the sophistication of state-sponsored attacks.'
                }
            },
            {
                id: 'ai-threats',
                title: 'AI-Powered Cyber Threats',
                icon: '🤖',
                severity: 'high',
                description: 'Machine learning enhanced attacks including deepfakes, automated hacking, and adversarial AI.',
                details: {
                    definition: 'AI-powered threats leverage machine learning algorithms to enhance attack effectiveness, automate reconnaissance, and evade traditional security measures.',
                    howItWorks: 'Attackers use neural networks for password cracking, natural language processing for phishing, and adversarial examples to fool AI-based defenses.',
                    prevention: ['AI-powered defense systems', 'Adversarial training for AI models', 'Human-in-the-loop verification', 'AI model security testing', 'Ethical AI development practices'],
                    realWorldExample: 'Deepfake technology has been used to impersonate CEOs in voice calls, resulting in successful business email compromise attacks worth millions.'
                }
            }
        ];

        const attacksData = [
            {
                id: 'sql-injection',
                title: 'Advanced SQL Injection',
                icon: '💉',
                severity: 'critical',
                description: 'Sophisticated database attacks using blind SQL injection, NoSQL injection, and automated tools.',
                details: {
                    definition: 'Modern SQL injection attacks employ advanced techniques like time-based blind injection, second-order injection, and NoSQL database targeting.',
                    howItWorks: 'Attackers use automated tools to identify injection points, bypass WAFs, and extract data through sophisticated boolean-based and time-based techniques.',
                    prevention: ['Parameterized queries and prepared statements', 'Input validation and sanitization', 'Database activity monitoring', 'Least privilege database access', 'Web application firewalls with ML'],
                    realWorldExample: 'The Anthem healthcare breach exposed 78.8 million records through sophisticated SQL injection techniques targeting healthcare databases.'
                }
            },
            {
                id: 'xss',
                title: 'Cross-Site Scripting (XSS)',
                icon: '🔧',
                severity: 'high',
                description: 'Advanced XSS attacks including DOM-based XSS, mutation XSS, and client-side template injection.',
                details: {
                    definition: 'Modern XSS attacks exploit client-side vulnerabilities in web applications, single-page applications, and progressive web apps.',
                    howItWorks: 'Attackers inject malicious scripts that execute in victim browsers, steal session tokens, perform actions on behalf of users, or deploy client-side malware.',
                    prevention: ['Content Security Policy (CSP) implementation', 'Input validation and output encoding', 'DOM XSS prevention frameworks', 'Regular security code reviews', 'Automated vulnerability scanning'],
                    realWorldExample: 'The British Airways website XSS attack compromised 380,000 payment transactions, demonstrating the financial impact of client-side vulnerabilities.'
                }
            },
            {
                id: 'apt-attacks',
                title: 'Advanced Persistent Threats',
                icon: '🎯',
                severity: 'critical',
                description: 'Long-term, stealthy campaigns using living-off-the-land techniques and sophisticated C2 infrastructure.',
                details: {
                    definition: 'APT attacks involve multi-stage, long-term campaigns that use legitimate tools and techniques to maintain persistence while avoiding detection.',
                    howItWorks: 'Attackers establish initial access, move laterally through networks using legitimate credentials, and maintain long-term access for espionage or sabotage.',
                    prevention: ['Advanced threat detection platforms', 'Network behavior analysis', 'Threat intelligence integration', 'Regular compromise assessments', 'Zero-trust architecture'],
                    realWorldExample: 'APT29 (Cozy Bear) conducted the SolarWinds supply chain attack, demonstrating the sophistication of nation-state threat actors.'
                }
            },
            {
                id: 'cloud-attacks',
                title: 'Cloud Infrastructure Attacks',
                icon: '☁️',
                severity: 'high',
                description: 'Attacks targeting cloud misconfigurations, container environments, and serverless architectures.',
                details: {
                    definition: 'Cloud attacks exploit misconfigurations, weak identity management, and insufficient monitoring in cloud environments.',
                    howItWorks: 'Attackers target exposed cloud storage, compromise cloud credentials, exploit container vulnerabilities, and abuse cloud services for cryptocurrency mining.',
                    prevention: ['Cloud security posture management (CSPM)', 'Identity and access management (IAM)', 'Cloud workload protection platforms', 'Container security scanning', 'Cloud audit and compliance monitoring'],
                    realWorldExample: 'The Capital One breach exposed 100 million customer records through a misconfigured web application firewall in AWS infrastructure.'
                }
            },
            {
                id: 'iot-attacks',
                title: 'IoT and Edge Computing Attacks',
                icon: '🏠',
                severity: 'medium',
                description: 'Attacks targeting smart devices, industrial IoT, and edge computing infrastructure.',
                details: {
                    definition: 'IoT attacks exploit weak authentication, unencrypted communications, and insufficient update mechanisms in connected devices.',
                    howItWorks: 'Attackers compromise IoT devices to create botnets, gain network access, conduct surveillance, or disrupt industrial processes.',
                    prevention: ['IoT device inventory and management', 'Network segmentation for IoT devices', 'Regular firmware updates', 'Strong authentication mechanisms', 'IoT security frameworks'],
                    realWorldExample: 'The Mirai botnet infected over 600,000 IoT devices worldwide, demonstrating the scale of IoT security vulnerabilities.'
                }
            }
        ];

        // Interactive Games Data
        const gamesData = [
            {
                id: 'phishing-sim',
                title: 'Phishing Email Simulator',
                icon: '📧',
                description: 'Learn to identify and create phishing emails in a safe environment.',
                gameType: 'phishing'
            },
            {
                id: 'sql-injection-lab',
                title: 'SQL Injection Laboratory',
                icon: '🗄️',
                description: 'Practice SQL injection techniques on a vulnerable database.',
                gameType: 'sql'
            },
            {
                id: 'xss-playground',
                title: 'XSS Attack Playground',
                icon: '🌐',
                description: 'Understand cross-site scripting through hands-on examples.',
                gameType: 'xss'
            },
            {
                id: 'social-engineering',
                title: 'Social Engineering Simulator',
                icon: '🎭',
                description: 'Practice social engineering techniques and defenses.',
                gameType: 'social'
            },
            {
                id: 'malware-analysis',
                title: 'Malware Analysis Lab',
                icon: '🔬',
                description: 'Analyze malware samples in a controlled environment.',
                gameType: 'malware'
            },
            {
                id: 'network-intrusion',
                title: 'Network Intrusion Simulator',
                icon: '🕸️',
                description: 'Learn network penetration testing techniques.',
                gameType: 'network'
            }
        ];

        // Simulated attack data for heatmap
        const attackLocations = [
            { lat: 40.7128, lng: -74.0060, country: 'USA', attacks: 1247, severity: 'critical' },
            { lat: 55.7558, lng: 37.6176, country: 'Russia', attacks: 892, severity: 'critical' },
            { lat: 39.9042, lng: 116.4074, country: 'China', attacks: 1156, severity: 'critical' },
            { lat: 51.5074, lng: -0.1278, country: 'UK', attacks: 634, severity: 'high' },
            { lat: 52.5200, lng: 13.4050, country: 'Germany', attacks: 423, severity: 'high' },
            { lat: 35.6762, lng: 139.6503, country: 'Japan', attacks: 378, severity: 'medium' },
            { lat: 19.0760, lng: 72.8777, country: 'India', attacks: 567, severity: 'high' },
            { lat: -33.8688, lng: 151.2093, country: 'Australia', attacks: 234, severity: 'medium' },
            { lat: 45.5017, lng: -73.5673, country: 'Canada', attacks: 189, severity: 'medium' },
            { lat: -23.5505, lng: -46.6333, country: 'Brazil', attacks: 345, severity: 'high' },
            { lat: 28.6139, lng: 77.2090, country: 'India', attacks: 456, severity: 'high' },
            { lat: 37.7749, lng: -122.4194, country: 'USA', attacks: 789, severity: 'critical' },
            { lat: 48.8566, lng: 2.3522, country: 'France', attacks: 287, severity: 'medium' },
            { lat: 41.9028, lng: 12.4964, country: 'Italy', attacks: 198, severity: 'medium' },
            { lat: 59.9311, lng: 30.3609, country: 'Russia', attacks: 445, severity: 'high' }
        ];

        // Generate heatmap dots
        function generateHeatmap() {
            const worldMap = document.getElementById('worldMap');
            if (!worldMap) return;
            
            const mapWidth = worldMap.clientWidth;
            const mapHeight = worldMap.clientHeight;

            attackLocations.forEach((location, index) => {
                // Convert lat/lng to map coordinates (simplified projection)
                const x = ((location.lng + 180) / 360) * mapWidth;
                const y = ((90 - location.lat) / 180) * mapHeight;

                const dot = document.createElement('div');
                dot.className = `attack-dot ${location.severity}`;
                dot.style.left = x + 'px';
                dot.style.top = y + 'px';
                dot.title = `${location.country}: ${location.attacks} attacks today`;
                dot.setAttribute('role', 'button');
                dot.setAttribute('tabindex', '0');
                dot.setAttribute('aria-label', `Attack in ${location.country}: ${location.attacks} attacks, ${location.severity} severity`);
                
                // Add click event for more details
                dot.onclick = () => {
                    alert(`${location.country}\nAttacks Today: ${location.attacks}\nSeverity: ${location.severity.toUpperCase()}`);
                };
                
                // Add keyboard support
                dot.onkeydown = (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        alert(`${location.country}\nAttacks Today: ${location.attacks}\nSeverity: ${location.severity.toUpperCase()}`);
                    }
                };

                worldMap.appendChild(dot);

                // Animate dots appearing
                setTimeout(() => {
                    dot.style.opacity = '1';
                }, index * 100);
            });
        }

        // Update statistics
        function updateStats() {
            const totalAttacks = attackLocations.reduce((sum, loc) => sum + loc.attacks, 0);
            const highRiskCountries = attackLocations.filter(loc => loc.severity === 'critical' || loc.severity === 'high').length;
            
            animateCounter('globalAttacks', totalAttacks);
            animateCounter('activeThreats', threatsData.length);
            animateCounter('highRiskCountries', highRiskCountries);
        }
        
        // Animate counter with realistic increments
        function animateCounter(elementId, target) {
            const element = document.getElementById(elementId);
            if (!element) return;
            
            let current = 0;
            const increment = target / 50;
            const duration = 2000; // 2 seconds
            const stepTime = duration / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = target.toLocaleString();
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current).toLocaleString();
                }
            }, stepTime);
        }

        // Generate game cards
        function generateGameCards() {
            const grid = document.getElementById('gamesGrid');
            gamesData.forEach(game => {
                const card = document.createElement('div');
                card.className = 'game-card';
                
                card.innerHTML = `
                    <div class="card-icon">${game.icon}</div>
                    <div class="card-title">${game.title}</div>
                    <div class="card-description">${game.description}</div>
                    <button class="play-button" onclick="startGame('${game.gameType}', '${game.title}')">
                        🎮 START SIMULATION
                    </button>
                `;
                
                grid.appendChild(card);
            });
        }

        // Generate threat cards
        function generateThreatCards() {
            const grid = document.getElementById('threatsGrid');
            threatsData.forEach(threat => {
                const card = document.createElement('div');
                card.className = 'threat-card';
                card.onclick = () => showDetails(threat);
                
                card.innerHTML = `
                    <div class="card-severity severity-${threat.severity}">${threat.severity.toUpperCase()}</div>
                    <div class="card-icon">${threat.icon}</div>
                    <div class="card-title">${threat.title}</div>
                    <div class="card-description">${threat.description}</div>
                `;
                
                grid.appendChild(card);
            });
        }

        // Generate attack cards
        function generateAttackCards() {
            const grid = document.getElementById('attacksGrid');
            attacksData.forEach(attack => {
                const card = document.createElement('div');
                card.className = 'attack-card';
                card.onclick = () => showDetails(attack);
                
                card.innerHTML = `
                    <div class="card-severity severity-${attack.severity}">${attack.severity.toUpperCase()}</div>
                    <div class="card-icon">${attack.icon}</div>
                    <div class="card-title">${attack.title}</div>
                    <div class="card-description">${attack.description}</div>
                `;
                
                grid.appendChild(card);
            });
        }

        // Start interactive games
        function startGame(gameType, title) {
            const modal = document.getElementById('gameModal');
            const content = document.getElementById('gameContent');
            
            let gameHTML = '';
            
            switch(gameType) {
                case 'phishing':
                    gameHTML = `
                        <h2>📧 ${title}</h2>
                        <p>Learn how phishing attacks work by creating a fake login page. This simulation shows how attackers can impersonate legitimate services.</p>
                        
                        <div class="game-area phishing-game">
                            <h3>Scenario: Create a Fake Facebook Login</h3>
                            <p>You are simulating how an attacker might create a convincing phishing page:</p>
                            
                            <div class="fake-login">
                                <h3 style="color: #1877f2; margin-bottom: 15px;">📘 Facebook</h3>
                                <input type="email" placeholder="Email or phone number" id="phishEmail">
                                <input type="password" placeholder="Password" id="phishPassword">
                                <button onclick="captureCredentials()">Log In</button>
                                <p style="font-size: 12px; margin-top: 10px; color: #666;">
                                    Connect with friends and the world around you on Facebook.
                                </p>
                            </div>
                            
                            <div id="phishingResult"></div>
                            
                            <div style="margin-top: 20px; padding: 15px; background: rgba(255, 140, 0, 0.1); border: 1px solid #ff8c00; border-radius: 5px;">
                                <h4 style="color: #ff8c00;">🛡️ How to Protect Yourself:</h4>
                                <ul style="color: #cccccc; margin-top: 10px;">
                                    <li>Always check the URL in the address bar</li>
                                    <li>Look for HTTPS and the padlock icon</li>
                                    <li>Be suspicious of urgent requests</li>
                                    <li>Use multi-factor authentication</li>
                                    <li>Never click links in suspicious emails</li>
                                </ul>
                            </div>
                        </div>
                    `;
                    break;
                    
                case 'sql':
                    gameHTML = `
                        <h2>🗄️ ${title}</h2>
                        <p>Learn SQL injection by practicing on a simulated vulnerable database. Try different injection techniques to extract data.</p>
                        
                        <div class="game-area sql-game">
                            <h3>Vulnerable Login Form</h3>
                            <p>Try SQL injection attacks on this simulated login form:</p>
                            
                            <div style="margin: 20px 0;">
                                <label style="color: #00ff41;">Username:</label>
                                <input type="text" class="sql-input" id="sqlUsername" placeholder="Enter username (try: admin' OR '1'='1)">
                            </div>
                            
                            <div style="margin: 20px 0;">
                                <label style="color: #00ff41;">Password:</label>
                                <input type="password" class="sql-input" id="sqlPassword" placeholder="Enter password">
                            </div>
                            
                            <button class="play-button" onclick="attemptSQLInjection()" style="width: 200px;">Execute Query</button>
                            
                            <div style="margin-top: 20px;">
                                <h4 style="color: #00ff41;">SQL Query:</h4>
                                <div class="sql-results" id="sqlQuery">SELECT * FROM users WHERE username = '' AND password = ''</div>
                            </div>
                            
                            <div style="margin-top: 20px;">
                                <h4 style="color: #00ff41;">Database Response:</h4>
                                <div class="sql-results" id="sqlResults">Ready to execute query...</div>
                            </div>
                            
                            <div style="margin-top: 20px; padding: 15px; background: rgba(50, 205, 50, 0.1); border: 1px solid #32cd32; border-radius: 5px;">
                                <h4 style="color: #32cd32;">🛡️ Prevention Techniques:</h4>
                                <ul style="color: #cccccc; margin-top: 10px;">
                                    <li>Use parameterized queries/prepared statements</li>
                                    <li>Implement input validation and sanitization</li>
                                    <li>Apply principle of least privilege for database access</li>
                                    <li>Use stored procedures when possible</li>
                                    <li>Deploy web application firewalls</li>
                                </ul>
                            </div>
                        </div>
                    `;
                    break;
                    
                case 'xss':
                    gameHTML = `
                        <h2>🌐 ${title}</h2>
                        <p>Understand Cross-Site Scripting by injecting JavaScript code into a vulnerable web application.</p>
                        
                        <div class="game-area xss-game">
                            <h3>Vulnerable Comment Section</h3>
                            <p>Try XSS attacks by entering JavaScript code in the comment field:</p>
                            
                            <textarea id="xssInput" placeholder="Enter your comment (try: <script>alert('XSS Attack!')</script>)"></textarea>
                            <button class="play-button" onclick="submitXSSComment()" style="width: 200px; margin: 10px 0;">Post Comment</button>
                            
                            <h4 style="color: #00ff41; margin-top: 20px;">Website Output:</h4>
                            <div class="xss-output" id="xssOutput">
                                <p>Comments will appear here...</p>
                            </div>
                            
                            <div id="xssResult"></div>
                            
                            <div style="margin-top: 20px; padding: 15px; background: rgba(255, 0, 64, 0.1); border: 1px solid #ff0040; border-radius: 5px;">
                                <h4 style="color: #ff0040;">🛡️ XSS Prevention:</h4>
                                <ul style="color: #cccccc; margin-top: 10px;">
                                    <li>Sanitize and validate all user inputs</li>
                                    <li>Implement Content Security Policy (CSP)</li>
                                    <li>Use output encoding/escaping</li>
                                    <li>Set HttpOnly flag on cookies</li>
                                    <li>Regular security code reviews</li>
                                </ul>
                            </div>
                        </div>
                    `;
                    break;
                    
                case 'social':
                    gameHTML = `
                        <h2>🎭 ${title}</h2>
                        <p>Learn social engineering techniques and how to defend against them through interactive scenarios.</p>
                        
                        <div class="game-area">
                            <h3>Social Engineering Scenario</h3>
                            <div id="socialScenario">
                                <p><strong>Scenario:</strong> You receive a phone call from someone claiming to be from IT support.</p>
                                <p><em>"Hi, this is John from IT. We're having some security issues and need to verify your password to maintain your account access. Can you please confirm your current password?"</em></p>
                                
                                <div style="margin: 20px 0;">
                                    <button class="play-button" onclick="socialChoice('give')" style="width: 300px; margin: 5px; background: linear-gradient(45deg, #ff0040, #ff4070);">Give them the password</button>
                                    <button class="play-button" onclick="socialChoice('verify')" style="width: 300px; margin: 5px; background: linear-gradient(45deg, #ff8c00, #ffb347);">Ask for verification first</button>
                                    <button class="play-button" onclick="socialChoice('refuse')" style="width: 300px; margin: 5px; background: linear-gradient(45deg, #32cd32, #90ee90);">Refuse and hang up</button>
                                </div>
                                
                                <div id="socialResult"></div>
                            </div>
                        </div>
                    `;
                    break;
                    
                case 'malware':
                    gameHTML = `
                        <h2>🔬 ${title}</h2>
                        <p>Analyze simulated malware samples to understand how malicious software operates.</p>
                        
                        <div class="game-area">
                            <h3>Malware Sample Analysis</h3>
                            <p>Analyze this suspicious file (simulation only):</p>
                            
                            <div style="background: #1a1a1a; padding: 15px; border-radius: 5px; margin: 15px 0; border: 1px solid #333;">
                                <p style="color: #00ff41; font-family: 'Courier New', monospace;">
                                    <strong>File:</strong> suspicious_document.pdf.exe<br>
                                    <strong>Size:</strong> 2.3 MB<br>
                                    <strong>MD5:</strong> d41d8cd98f00b204e9800998ecf8427e<br>
                                    <strong>Type:</strong> PE32 executable
                                </p>
                            </div>
                            
                            <button class="play-button" onclick="analyzeMalware()" style="width: 200px;">Analyze Sample</button>
                            
                            <div id="malwareResults" style="margin-top: 20px;"></div>
                        </div>
                    `;
                    break;
                    
                case 'network':
                    gameHTML = `
                        <h2>🕸️ ${title}</h2>
                        <p>Learn network penetration testing by scanning a simulated network for vulnerabilities.</p>
                        
                        <div class="game-area">
                            <h3>Network Reconnaissance</h3>
                            <p>Scan the target network: 192.168.1.0/24</p>
                            
                            <div style="margin: 20px 0;">
                                <button class="play-button" onclick="networkScan('ping')" style="width: 150px; margin: 5px;">Ping Sweep</button>
                                <button class="play-button" onclick="networkScan('port')" style="width: 150px; margin: 5px;">Port Scan</button>
                                <button class="play-button" onclick="networkScan('vuln')" style="width: 150px; margin: 5px;">Vuln Scan</button>
                            </div>
                            
                            <div class="sql-results" id="networkResults" style="min-height: 200px;">
                                Network scan results will appear here...
                            </div>
                        </div>
                    `;
                    break;
            }
            
            content.innerHTML = gameHTML;
            modal.style.display = 'block';
        }

        // Game Functions
        function captureCredentials() {
            const email = document.getElementById('phishEmail').value;
            const password = document.getElementById('phishPassword').value;
            const result = document.getElementById('phishingResult');
            
            if (email && password) {
                result.innerHTML = `
                    <div class="game-result warning">
                        <h4>⚠️ Credentials Captured!</h4>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Password:</strong> ${'*'.repeat(password.length)}</p>
                        <p>In a real attack, this information would be sent to the attacker's server. The victim would then be redirected to the real Facebook page, often unaware that their credentials were stolen.</p>
                    </div>
                `;
            } else {
                result.innerHTML = `
                    <div class="game-result warning">
                        <p>Please enter both email and password to see how the attack works.</p>
                    </div>
                `;
            }
        }

        function attemptSQLInjection() {
            const username = document.getElementById('sqlUsername').value;
            const password = document.getElementById('sqlPassword').value;
            const queryDiv = document.getElementById('sqlQuery');
            const resultsDiv = document.getElementById('sqlResults');
            
            const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
            queryDiv.textContent = query;
            
            if (username.includes("'") || username.toLowerCase().includes("or")) {
                resultsDiv.innerHTML = `
                    <span style="color: #ff0040;">SQL Injection Detected!</span><br><br>
                    <strong>Query Result:</strong><br>
                    User ID: 1, Username: admin, Email: admin@company.com, Role: administrator<br>
                    User ID: 2, Username: user1, Email: user1@company.com, Role: user<br>
                    User ID: 3, Username: guest, Email: guest@company.com, Role: guest<br><br>
                    <span style="color: #ff0040;">⚠️ All user records exposed! Login bypassed!</span>
                `;
            } else if (username === 'admin' && password === 'password') {
                resultsDiv.innerHTML = `
                    <span style="color: #32cd32;">Login Successful!</span><br>
                    Welcome, admin!
                `;
            } else {
                resultsDiv.innerHTML = `
                    <span style="color: #ff8c00;">Login Failed!</span><br>
                    Invalid username or password.
                `;
            }
        }

        function submitXSSComment() {
            const input = document.getElementById('xssInput').value;
            const output = document.getElementById('xssOutput');
            const result = document.getElementById('xssResult');
            
            // Check for XSS patterns
            const xssPatterns = [
                /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                /javascript:/gi,
                /on\w+\s*=/gi,
                /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
                /<img\b[^<]*on\w+\s*=/gi
            ];
            
            const hasXSS = xssPatterns.some(pattern => pattern.test(input));
            
            // Simulate XSS vulnerability by directly inserting HTML (for educational purposes only)
            output.innerHTML = `
                <div style="border-bottom: 1px solid #ccc; margin-bottom: 10px; padding-bottom: 10px;">
                    <strong>Anonymous User:</strong><br>
                    ${input}
                </div>
            `;
            
            if (hasXSS) {
                result.innerHTML = `
                    <div class="game-result warning">
                        <h4>⚠️ XSS Attack Detected!</h4>
                        <p>The malicious script was executed in the browser. In a real scenario, this could:</p>
                        <ul>
                            <li>Steal user cookies and session tokens</li>
                            <li>Redirect users to malicious websites</li>
                            <li>Modify page content</li>
                            <li>Perform actions on behalf of the user</li>
                        </ul>
                        <p><strong>Educational Note:</strong> This simulation demonstrates why proper input sanitization is crucial.</p>
                    </div>
                `;
            } else {
                result.innerHTML = `
                    <div class="game-result success">
                        <h4>✅ Safe Input</h4>
                        <p>No XSS patterns detected in this input. However, in a real application, all user input should still be properly sanitized.</p>
                    </div>
                `;
            }
        }

        function socialChoice(choice) {
            const result = document.getElementById('socialResult');
            
            switch(choice) {
                case 'give':
                    result.innerHTML = `
                        <div class="game-result warning">
                            <h4>❌ Poor Choice!</h4>
                            <p>You fell for the social engineering attack! Legitimate IT support will never ask for passwords over the phone. Your account could now be compromised.</p>
                        </div>
                    `;
                    break;
                case 'verify':
                    result.innerHTML = `
                        <div class="game-result success">
                            <h4>⚠️ Good Instinct!</h4>
                            <p>Asking for verification is smart, but be careful. Attackers might have done research and could provide convincing details. It's still safer to hang up and call IT directly.</p>
                        </div>
                    `;
                    break;
                case 'refuse':
                    result.innerHTML = `
                        <div class="game-result success">
                            <h4>✅ Excellent Choice!</h4>
                            <p>Perfect response! You correctly identified this as a potential social engineering attack. Always hang up and contact IT through official channels if you receive unsolicited requests for credentials.</p>
                        </div>
                    `;
                    break;
            }
        }

        function analyzeMalware() {
            const results = document.getElementById('malwareResults');
            results.innerHTML = `
                <div class="loading" style="margin: 20px auto;"></div>
                <p>Analyzing malware sample...</p>
            `;
            
            setTimeout(() => {
                results.innerHTML = `
                    <div style="background: #1a1a1a; padding: 15px; border-radius: 5px; border: 1px solid #333;">
                        <h4 style="color: #ff0040;">⚠️ MALWARE DETECTED</h4>
                        <p style="color: #00ff41; font-family: 'Courier New', monospace; margin-top: 10px;">
                            <strong>Threat Type:</strong> Trojan.Generic.KD.41823456<br>
                            <strong>Risk Level:</strong> High<br>
                            <strong>Behavior Analysis:</strong><br>
                            • Creates registry keys for persistence<br>
                            • Attempts to contact C&C server: evil-server.com<br>
                            • Keylogger functionality detected<br>
                            • Cryptocurrency mining components<br>
                            • Anti-debugging techniques present<br><br>
                            <strong>Recommendation:</strong> QUARANTINE IMMEDIATELY
                        </p>
                    </div>
                    <div style="margin-top: 15px; padding: 15px; background: rgba(50, 205, 50, 0.1); border: 1px solid #32cd32; border-radius: 5px;">
                        <h4 style="color: #32cd32;">🛡️ Analysis Complete</h4>
                        <p>This sample demonstrates how modern malware operates with multiple attack vectors and evasion techniques.</p>
                    </div>
                `;
            }, 2000);
        }

        function networkScan(type) {
            const results = document.getElementById('networkResults');
            
            switch(type) {
                case 'ping':
                    results.innerHTML = `
                        <div class="loading" style="display: inline-block; margin-right: 10px;"></div>Performing ping sweep...<br><br>
                    `;
                    setTimeout(() => {
                        results.innerHTML = `
Host Discovery Results:
========================
192.168.1.1    - UP (Router/Gateway)
192.168.1.10   - UP (Windows Workstation)
192.168.1.15   - UP (Linux Server)
192.168.1.20   - UP (Windows Server)
192.168.1.25   - UP (Network Printer)
192.168.1.100  - UP (IoT Device)

6 hosts discovered on network.
                        `;
                    }, 1500);
                    break;
                    
                case 'port':
                    results.innerHTML = `
                        <div class="loading" style="display: inline-block; margin-right: 10px;"></div>Scanning ports on 192.168.1.20...<br><br>
                    `;
                    setTimeout(() => {
                        results.innerHTML = `
Port Scan Results for 192.168.1.20:
===================================
21/tcp   open  ftp
22/tcp   open  ssh
23/tcp   open  telnet      [VULNERABLE]
80/tcp   open  http
135/tcp  open  msrpc
139/tcp  open  netbios-ssn
443/tcp  open  https
445/tcp  open  microsoft-ds [VULNERABLE]
3389/tcp open  ms-wbt-server

⚠️ Found 2 potentially vulnerable services!
                        `;
                    }, 2000);
                    break;
                    
                case 'vuln':
                    results.innerHTML = `
                        <div class="loading" style="display: inline-block; margin-right: 10px;"></div>Running vulnerability assessment...<br><br>
                    `;
                    setTimeout(() => {
                        results.innerHTML = `
Vulnerability Assessment Results:
================================
Target: 192.168.1.20

🔴 CRITICAL Vulnerabilities:
- MS17-010 (EternalBlue) - SMB Remote Code Execution
- CVE-2019-0708 (BlueKeep) - RDP Remote Code Execution

🟡 HIGH Vulnerabilities:
- Weak Telnet Configuration
- Outdated Apache Version (2.2.15)
- Default SNMP Community Strings

🟢 MEDIUM Vulnerabilities:
- Missing Security Headers
- Information Disclosure via HTTP Banner

Recommendation: Immediate patching required!
                        `;
                    }, 3000);
                    break;
            }
        }

        // Show detailed information in modal
        function showDetails(item) {
            const modal = document.getElementById('detailModal');
            const content = document.getElementById('modalContent');
            
            content.innerHTML = `
                <h2>${item.icon} ${item.title}</h2>
                <div class="card-severity severity-${item.severity}" style="position: static; margin-bottom: 20px; display: inline-block;">
                    ${item.severity.toUpperCase()} SEVERITY
                </div>
                
                <h3>📋 Technical Definition</h3>
                <p>${item.details.definition}</p>
                
                <h3>⚙️ Attack Methodology</h3>
                <p>${item.details.howItWorks}</p>
                
                <h3>🛡️ Advanced Prevention Measures</h3>
                <ul>
                    ${item.details.prevention.map(measure => `<li>${measure}</li>`).join('')}
                </ul>
                
                <h3>🌍 Case Study</h3>
                <p>${item.details.realWorldExample}</p>
            `;
            
            modal.style.display = 'block';
        }

        // System scan animation
        function startSystemScan() {
            const button = document.querySelector('.scan-button');
            const systemStatus = document.getElementById('systemStatus');
            
            button.textContent = '🔄 SCANNING SYSTEMS...';
            button.style.background = 'linear-gradient(45deg, #ff8c00, #ffd700)';
            systemStatus.textContent = 'SCANNING';
            systemStatus.style.color = '#ff8c00';
            
            // Simulate real-time updates during scan
            setTimeout(() => {
                systemStatus.textContent = 'ANALYZING';
            }, 1000);
            
            setTimeout(() => {
                button.textContent = '✅ SCAN COMPLETE - SYSTEMS SECURE';
                button.style.background = 'linear-gradient(45deg, #32cd32, #00ff41)';
                systemStatus.textContent = 'SECURE';
                systemStatus.style.color = '#32cd32';
                
                // Update all counters
                updateStats();
                
                setTimeout(() => {
                    button.textContent = '🔍 INITIATE THREAT SCAN';
                    button.style.background = 'linear-gradient(45deg, #00ff41, #32cd32)';
                    systemStatus.textContent = 'ACTIVE';
                    systemStatus.style.color = '#00ff41';
                }, 4000);
            }, 3000);
        }



        // Simulate real-time attack updates
        function simulateRealTimeAttacks() {
            const attackInterval = setInterval(() => {
                // Randomly update attack counts
                attackLocations.forEach(location => {
                    const increment = Math.floor(Math.random() * 5) + 1;
                    location.attacks += increment;
                });
                
                // Update the global attacks counter
                const totalAttacks = attackLocations.reduce((sum, loc) => sum + loc.attacks, 0);
                const globalAttacksElement = document.getElementById('globalAttacks');
                if (globalAttacksElement) {
                    globalAttacksElement.textContent = totalAttacks.toLocaleString();
                    
                    // Add visual pulse effect to show updates
                    globalAttacksElement.style.color = '#ff0040';
                    setTimeout(() => {
                        globalAttacksElement.style.color = '#00ff41';
                    }, 500);
                }
                
            }, 5000); // Update every 5 seconds
            
            // Clean up interval on page unload
            window.addEventListener('beforeunload', () => {
                clearInterval(attackInterval);
            });
        }

        // Add new attack dots periodically
        function addNewAttackDots() {
            const dotInterval = setInterval(() => {
                const worldMap = document.getElementById('worldMap');
                if (!worldMap) return;
                
                const mapWidth = worldMap.clientWidth;
                const mapHeight = worldMap.clientHeight;
                
                // Create random attack location
                const randomAttack = {
                    lat: (Math.random() - 0.5) * 180,
                    lng: (Math.random() - 0.5) * 360,
                    severity: ['low', 'medium', 'high', 'critical'][Math.floor(Math.random() * 4)]
                };
                
                const x = ((randomAttack.lng + 180) / 360) * mapWidth;
                const y = ((90 - randomAttack.lat) / 180) * mapHeight;
                
                const dot = document.createElement('div');
                dot.className = `attack-dot ${randomAttack.severity}`;
                dot.style.left = x + 'px';
                dot.style.top = y + 'px';
                dot.style.opacity = '0';
                
                worldMap.appendChild(dot);
                
                // Animate in
                setTimeout(() => {
                    dot.style.opacity = '1';
                }, 100);
                
                // Remove after animation
                setTimeout(() => {
                    if (dot.parentNode) {
                        dot.parentNode.removeChild(dot);
                    }
                }, 8000);
                
            }, 2000); // Add new dot every 2 seconds
            
            // Clean up interval on page unload
            window.addEventListener('beforeunload', () => {
                clearInterval(dotInterval);
            });
        }

        // Fallback video creation if video fails to load
        function createFallbackMatrix() {
            const canvas = document.getElementById('matrixCanvas');
            if (!canvas) return;
            
            canvas.style.display = 'block';
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            canvas.style.position = 'fixed';
            canvas.style.top = '0';
            canvas.style.left = '0';
            canvas.style.zIndex = '-2';
            canvas.style.opacity = '0.1';
            
            const ctx = canvas.getContext('2d');
            const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
            const columns = canvas.width / 20;
            const drops = Array(Math.floor(columns)).fill(1);
            
            function drawMatrix() {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                ctx.fillStyle = '#00ff41';
                ctx.font = '15px monospace';
                
                for (let i = 0; i < drops.length; i++) {
                    const text = chars[Math.floor(Math.random() * chars.length)];
                    ctx.fillText(text, i * 20, drops[i] * 20);
                    
                    if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                        drops[i] = 0;
                    }
                    drops[i]++;
                }
            }
            
            const matrixInterval = setInterval(drawMatrix, 35);
            
            // Clean up interval on page unload
            window.addEventListener('beforeunload', () => {
                clearInterval(matrixInterval);
            });
        }

        // Initialize the application
        document.addEventListener('DOMContentLoaded', function() {
            // Check if video loads, if not use fallback
            const video = document.querySelector('.video-background video');
            if (video) {
                video.addEventListener('error', createFallbackMatrix);
                video.addEventListener('loadstart', function() {
                    // Video is loading, hide canvas
                    const canvas = document.getElementById('matrixCanvas');
                    if (canvas) canvas.style.display = 'none';
                });
            } else {
                // No video element found, use fallback
                createFallbackMatrix();
            }
            
            generateHeatmap();
            generateGameCards();
            generateThreatCards();
            generateAttackCards();
            updateStats();
            
            // Start real-time simulations
            simulateRealTimeAttacks();
            addNewAttackDots();
            
            // Modal close functionality
            const detailModal = document.getElementById('detailModal');
            const gameModal = document.getElementById('gameModal');
            const closeBtns = document.querySelectorAll('.close');
            
            closeBtns.forEach(btn => {
                btn.onclick = function() {
                    detailModal.style.display = 'none';
                    gameModal.style.display = 'none';
                }
            });
            
            window.onclick = function(event) {
                if (event.target === detailModal) {
                    detailModal.style.display = 'none';
                }
                if (event.target === gameModal) {
                    gameModal.style.display = 'none';
                }
            }
            
            // Keyboard navigation
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    detailModal.style.display = 'none';
                    gameModal.style.display = 'none';
                }
            });
            
                    // Responsive heatmap
            let resizeTimeout;
            window.addEventListener('resize', function() {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    const worldMap = document.getElementById('worldMap');
                    if (worldMap) {
                        worldMap.innerHTML = '';
                        generateHeatmap();
                    }
                }, 100);
            });
        });

        // Add periodic threat level updates
        const threatInterval = setInterval(() => {
            const threatCards = document.querySelectorAll('.threat-card, .attack-card');
            threatCards.forEach(card => {
                if (Math.random() < 0.1) { // 10% chance
                    card.style.borderColor = '#ff0040';
                    card.style.boxShadow = '0 0 20px rgba(255, 0, 64, 0.5)';
                    setTimeout(() => {
                        card.style.borderColor = '#333333';
                        card.style.boxShadow = 'none';
                    }, 1000);
                }
            });
        }, 3000);
        
        // Clean up interval on page unload
        window.addEventListener('beforeunload', () => {
            clearInterval(threatInterval);
        });

        // Add status updates to header
        const statusInterval = setInterval(() => {
            const statusMessages = [
                'Monitoring global threats...',
                'Analyzing network traffic...',
                'Updating threat intelligence...',
                'Scanning for vulnerabilities...',
                'Processing security alerts...'
            ];
            
            const header = document.querySelector('.header p');
            if (!header) return;
            
            const originalText = 'Professional Interactive Security Operations Center';
            
            if (Math.random() < 0.2) { // 20% chance
                const randomMessage = statusMessages[Math.floor(Math.random() * statusMessages.length)];
                header.textContent = randomMessage;
                header.style.color = '#ff8c00';
                
                setTimeout(() => {
                    if (header) {
                        header.textContent = originalText;
                        header.style.color = '#cccccc';
                    }
                }, 2000);
            }
        }, 4000);
        
        // Clean up interval on page unload

        // Navbar scroll functionality
        let lastScrollTop = 0;
        const header = document.querySelector('.header');
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down - hide navbar
                header.classList.add('hidden');
            } else {
                // Scrolling up - show navbar
                header.classList.remove('hidden');
            }
            
            lastScrollTop = scrollTop;
        });

        // Mobile-specific enhancements
        // Detect mobile device
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        // Mobile-specific navbar behavior
        if (isMobile) {
            // Hide navbar more aggressively on mobile
            window.addEventListener('scroll', function() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                if (scrollTop > lastScrollTop && scrollTop > 50) {
                    header.classList.add('hidden');
                } else {
                    header.classList.remove('hidden');
                }
                
                lastScrollTop = scrollTop;
            });
        }

        // About section toggle functionality
        function toggleAboutSection() {
            const aboutContainer = document.querySelector('.about-me-container');
            const aboutBtn = document.querySelector('.about-btn');
            
            if (aboutContainer.classList.contains('show')) {
                // Hide about section
                aboutContainer.classList.remove('show');
                aboutBtn.innerHTML = '<span>👨‍💻</span> About';
                setTimeout(() => {
                    aboutContainer.style.display = 'none';
                }, 500);
            } else {
                // Show about section
                aboutContainer.style.display = 'block';
                setTimeout(() => {
                    aboutContainer.classList.add('show');
                    
                    // Auto-scroll to the about section
                    smoothScrollTo(aboutContainer);
                }, 10);
                aboutBtn.innerHTML = '<span>✖️</span> Close';
            }
        }

        // Smooth scroll utility function
        function smoothScrollTo(element) {
            if ('scrollBehavior' in document.documentElement.style) {
                // Modern browsers - use scrollIntoView
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });
            } else {
                // Fallback for older browsers
                const elementPosition = element.offsetTop - 100;
                window.scrollTo(0, elementPosition);
            }
        }
