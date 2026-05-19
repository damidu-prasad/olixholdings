-- Run this entire script in your Supabase SQL Editor

-- 1. Create the site_content table
CREATE TABLE site_content (
  id integer PRIMARY KEY,
  data jsonb NOT NULL
);

-- 2. Insert the initial default content
INSERT INTO site_content (id, data) VALUES (
  1,
  '{
    "stats": [
      { "id": 1, "label": "Clients Worldwide", "value": 150, "suffix": "+" },
      { "id": 2, "label": "Automations Deployed", "value": 500, "suffix": "+" },
      { "id": 3, "label": "Client Satisfaction", "value": 98, "suffix": "%" },
      { "id": 4, "label": "Industries Covered", "value": 12, "suffix": "+" }
    ],
    "services": [
      { "id": 1, "icon": "⚙️", "title": "End-to-End Workflow Automation", "desc": "Cross-platform orchestration. Maps and links disjointed infrastructure to execute operations seamlessly 24/7 without manual latency.", "features": ["Process mapping & optimization","Multi-platform orchestration","Conditional logic workflows","Real-time monitoring dashboards"] },
      { "id": 2, "icon": "🧠", "title": "Custom AI Agents & Solutions", "desc": "Tailored LLM executions. Task-specific digital assistants that navigate data schemas, qualify leads, and handle complex communications.", "features": ["Custom GPT-powered agents","Lead qualification bots","Internal knowledge assistants","Multi-language support"] },
      { "id": 3, "icon": "🔄", "title": "System Integration & Live Syncing", "desc": "Data pipeline integrity. Eliminating manual data entries via low-code pipelines and custom scripts for smooth cross-system data flow.", "features": ["CRM & ERP integrations","Real-time data pipelines","API development & management","Legacy system modernization"] },
      { "id": 4, "icon": "🚀", "title": "AI-Driven Product Engineering", "desc": "Custom business intelligence. Bespoke analytics software with ML components to auto-generate reports and surface real-time KPIs.", "features": ["Custom dashboard development","Predictive analytics engines","ML model deployment","Real-time KPI monitoring"] },
      { "id": 5, "icon": "📞", "title": "AI Customer Service Solutions", "desc": "Deploy intelligent customer service agents that handle inquiries 24/7, route tickets intelligently, and provide personalized support at scale.", "features": ["AI chat & voice agents","Sentiment analysis","Smart ticket routing","Customer journey analytics"] },
      { "id": 6, "icon": "🏦", "title": "Finance Automation", "desc": "Streamline financial operations with automated compliance checks, transaction processing, risk assessment, and intelligent reporting systems.", "features": ["Automated compliance","Transaction processing","Risk analysis AI","Financial report generation"] }
    ],
    "products": [
      { "id": 1, "name": "Olix AutoFlow", "tag": "Workflow Engine", "desc": "Our flagship workflow automation platform. Design, deploy, and monitor complex multi-step automations with a visual drag-and-drop builder.", "features": ["Visual workflow builder","Conditional branching","200+ integrations","Real-time analytics"], "color": "#6366f1" },
      { "id": 2, "name": "Olix AgentX", "tag": "AI Agent Platform", "desc": "Build and deploy custom AI agents powered by the latest LLMs. Train them on your data and deploy across channels.", "features": ["Custom LLM training","Multi-channel deployment","Knowledge base integration","Conversation analytics"], "color": "#06b6d4" },
      { "id": 3, "name": "Olix SyncHub", "tag": "Integration Platform", "desc": "Connect all your systems with real-time bidirectional syncing. Eliminate data silos and ensure accurate data everywhere.", "features": ["Real-time syncing","Data transformation","Error handling & retries","Audit logging"], "color": "#8b5cf6" },
      { "id": 4, "name": "Olix InsightEngine", "tag": "Analytics Suite", "desc": "AI-powered analytics that automatically surface insights, generate reports, and predict trends.", "features": ["Auto-generated reports","Predictive analytics","Custom dashboards","Natural language queries"], "color": "#10b981" }
    ],
    "industries": [
      { "id": 1, "icon": "🏦", "name": "Finance & Banking", "desc": "Automated compliance, risk analysis, and transaction processing" },
      { "id": 2, "icon": "📞", "name": "Customer Service", "desc": "AI-powered support agents, ticket routing, and sentiment analysis" },
      { "id": 3, "icon": "🏥", "name": "Healthcare", "desc": "Patient data workflows, appointment scheduling, and medical record processing" },
      { "id": 4, "icon": "🛒", "name": "E-Commerce & Retail", "desc": "Inventory automation, dynamic pricing, and customer journey optimization" },
      { "id": 5, "icon": "🏭", "name": "Manufacturing", "desc": "Supply chain orchestration, predictive maintenance, and quality control" },
      { "id": 6, "icon": "📊", "name": "SaaS & Technology", "desc": "DevOps automation, usage analytics, and intelligent onboarding flows" }
    ],
    "reviews": [
      { "id": 1, "name": "Sarah Mitchell", "role": "CTO, FinEdge Solutions", "text": "Olix Holdings completely transformed our financial operations. Their AI agents reduced our processing time by 80%.", "rating": 5 },
      { "id": 2, "name": "James Rodriguez", "role": "VP Operations, RetailNova", "text": "The workflow automation they built for our e-commerce platform handles thousands of orders seamlessly. Revenue is up 35%.", "rating": 5 },
      { "id": 3, "name": "Dr. Emily Chen", "role": "Director, MedSync Health", "text": "Their healthcare automation suite streamlined our patient intake process entirely.", "rating": 5 },
      { "id": 4, "name": "Mark Thompson", "role": "CEO, ScaleForce AI", "text": "Working with Olix was a game-changer. Their custom AI agent handles our entire lead qualification pipeline.", "rating": 5 },
      { "id": 5, "name": "Lisa Park", "role": "Head of CS, CloudReach", "text": "Our customer service response times dropped from hours to seconds.", "rating": 5 },
      { "id": 6, "name": "David Okafor", "role": "COO, LogiStream", "text": "The system integration Olix built connected our 12 different platforms into one seamless workflow.", "rating": 5 }
    ],
    "jobs": [
      { "id": 1, "title": "Senior AI Engineer", "dept": "Engineering", "location": "Remote", "type": "Full-time", "desc": "Design and implement cutting-edge AI solutions.", "active": true },
      { "id": 2, "title": "Full Stack Developer", "dept": "Engineering", "location": "Remote", "type": "Full-time", "desc": "Build and maintain our web platforms and internal tools.", "active": true },
      { "id": 3, "title": "AI Sales Consultant", "dept": "Sales", "location": "Remote", "type": "Full-time", "desc": "Drive revenue by consulting with enterprise clients on AI automation.", "active": true },
      { "id": 4, "title": "Automation Architect", "dept": "Operations", "location": "Remote", "type": "Full-time", "desc": "Design and architect complex workflow automations.", "active": true },
      { "id": 5, "title": "UX/UI Designer", "dept": "Design", "location": "Remote", "type": "Full-time", "desc": "Create stunning interfaces for our products.", "active": true },
      { "id": 6, "title": "Marketing Manager", "dept": "Marketing", "location": "Remote", "type": "Full-time", "desc": "Lead our content strategy and demand generation efforts.", "active": true }
    ],
    "heroTitle": "Intelligent AI Automation Built to Scale Operations",
    "heroSubtitle": "We design, deploy, and engineer custom AI solutions and end-to-end automated workflows that eliminate manual overhead, optimize data structures, and accelerate growth.",
    "logoImage": null
  }'::jsonb
);

-- 3. Create the bookings table
CREATE TABLE bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text,
  email text,
  company text,
  phone text,
  service text,
  date text,
  time text,
  notes text,
  status text DEFAULT 'pending',
  created_at timestamp with time zone DEFAULT now()
);

-- 4. Create the contacts table
CREATE TABLE contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text,
  email text,
  company text,
  subject text,
  message text,
  status text DEFAULT 'unread',
  created_at timestamp with time zone DEFAULT now()
);

-- 5. Enable Row Level Security (RLS) but allow public access for this static site
ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to site_content" ON site_content FOR SELECT USING (true);
CREATE POLICY "Allow public update access to site_content" ON site_content FOR UPDATE USING (true);

CREATE POLICY "Allow public read access to bookings" ON bookings FOR SELECT USING (true);
CREATE POLICY "Allow public insert access to bookings" ON bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update access to bookings" ON bookings FOR UPDATE USING (true);
CREATE POLICY "Allow public delete access to bookings" ON bookings FOR DELETE USING (true);

CREATE POLICY "Allow public read access to contacts" ON contacts FOR SELECT USING (true);
CREATE POLICY "Allow public insert access to contacts" ON contacts FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update access to contacts" ON contacts FOR UPDATE USING (true);
CREATE POLICY "Allow public delete access to contacts" ON contacts FOR DELETE USING (true);
