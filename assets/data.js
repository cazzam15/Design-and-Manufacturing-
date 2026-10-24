// Nat 5 Design & Manufacture — question bank, worksheets, key facts, mock papers and links.
// Ported from the previous single-page version of this site (kept in the repo as legacy.html).
// Question format: {topic, type:'mcq'|'fillin', q, opts (mcq), ans (index for mcq, text for fillin), explain}
const META={"subject": "Design & Manufacture", "title": "Free Nat 5 Design & Manufacture Revision — Scotland", "slug": "nat5-design-manufacture", "store": "n5dm_v3", "legacyStore": null};
const TOPICS=[{"id": "design", "name": "Design", "icon": "✏️", "sub": "Design process · Factors · Research · Spec · Ideas · Modelling · Graphics · Ergonomics"}, {"id": "materials", "name": "Materials & Properties", "icon": "🪵", "sub": "Hardwoods · Softwoods · Manufactured boards · Metals · Plastics · Properties & uses"}, {"id": "tools", "name": "Tools & Processes", "icon": "🔧", "sub": "Measuring · Marking out · Hand tools · Machine tools · Joining · Finishing"}, {"id": "commercial", "name": "Commercial Manufacture", "icon": "🏭", "sub": "Vacuum forming · Injection moulding · Sand casting · CAM · 3D printing · Sustainability"}];
const QUESTIONS=[
{"topic": "design", "type": "mcq", "q": "What is the FIRST stage of the design process?", "opts": ["Producing a prototype", "Analysing the design brief and carrying out research", "Choosing materials", "Creating a final drawing"], "ans": 1, "explain": "The design process begins with analysing the brief — understanding what is required. Research is carried out to inform the product specification. The spec then guides idea generation and development."},
{"topic": "design", "type": "mcq", "q": "What is a PRODUCT SPECIFICATION?", "opts": ["A list of materials needed", "A set of criteria the finished product must meet, based on the brief and research", "A manufacturing plan with step-by-step instructions", "A sketch of the final design"], "ans": 1, "explain": "A product specification lists the requirements a design must meet: dimensions, materials, target market, function, aesthetics, cost, safety, etc. It is derived from the brief and research, and used to evaluate designs throughout the process."},
{"topic": "design", "type": "mcq", "q": "PRIMARY function of a product refers to:", "opts": ["What the product looks like", "The decorative features of a product", "The MAIN purpose the product was designed to perform", "The secondary uses people find for it"], "ans": 2, "explain": "Primary function = the main intended purpose (e.g. a chair's primary function is seating). Secondary function = additional purposes (e.g. a chair might also store items underneath). Both affect design decisions."},
{"topic": "design", "type": "mcq", "q": "ERGONOMICS in product design involves:", "opts": ["Making products look attractive", "Designing products to fit human body dimensions and ensure safety, comfort, and ease of use", "Choosing environmentally friendly materials", "Reducing production costs"], "ans": 1, "explain": "Ergonomics considers the relationship between humans and products: safety (no sharp edges), comfort (correct seat height), ease of use (controls within reach). Anthropometric data (measurements of the human body) is used to inform ergonomic design."},
{"topic": "design", "type": "mcq", "q": "ANTHROPOMETRIC data is used in design to:", "opts": ["Calculate the cost of production", "Measure the environmental impact of a product", "Use human body measurements to ensure products fit and are comfortable for users", "Test the strength of materials"], "ans": 2, "explain": "Anthropometric data is statistical information about the human body (heights, reach distances, hand sizes, etc.). Designers use it to ensure products fit their target market — e.g. designing a chair to suit the 5th to 95th percentile of adults, i.e. the middle 90%."},
{"topic": "design", "type": "mcq", "q": "Which idea-generation technique involves listing a problem's attributes and changing each one to generate new ideas?", "opts": ["Brainstorming", "Mood board", "Morphological analysis", "User trip"], "ans": 2, "explain": "Morphological analysis: list the main attributes/functions of a product in columns, then find different ways to achieve each one. Combining options from each column generates new design ideas. Brainstorming generates many ideas quickly through free thinking."},
{"topic": "design", "type": "mcq", "q": "BRAINSTORMING as an idea-generation technique involves:", "opts": ["Testing a prototype with users", "Rapidly generating as many ideas as possible without initially judging them", "Analysing competitor products", "Measuring human body dimensions"], "ans": 1, "explain": "Brainstorming: generate as many ideas as quickly as possible — no criticism at this stage. All ideas are recorded. It works best in groups and encourages creative thinking. Ideas are then evaluated afterwards."},
{"topic": "design", "type": "mcq", "q": "A SKETCH MODEL is used in the design process to:", "opts": ["Create the final production-ready product", "Quickly explore and test 3D ideas in an early stage — cheap and fast to make", "Present a polished final design to a client", "Measure exact dimensions of a product"], "ans": 1, "explain": "Sketch (rough) models are made quickly and cheaply from materials like cardboard or foam to explore and test 3D ideas early in the design process. They help designers visualise proportions and forms before committing to more detailed development."},
{"topic": "design", "type": "mcq", "q": "A SCALE MODEL is used to:", "opts": ["Test strength of materials", "Show the design at a reduced or enlarged size while maintaining correct proportions — useful for large or very small products", "Replace the need for drawings", "Manufacture the final product"], "ans": 1, "explain": "Scale models represent the product at a proportional size — e.g. 1:10 means the model is 10 times smaller than the real product. Used when the actual size would be impractical (e.g. buildings, vehicles, tiny electronic components)."},
{"topic": "design", "type": "mcq", "q": "COMPUTER-GENERATED models (CAD) offer which advantage over physical models?", "opts": ["They are more realistic than the finished product", "They can be easily modified, viewed from any angle, tested virtually, and shared digitally without making a physical object", "They are cheaper than cardboard models", "They replace the need for design drawings"], "ans": 1, "explain": "CAD (Computer-Aided Design) advantages: easy to edit and modify, can be viewed from any angle, virtual testing (stress, fluid dynamics), easy to share digitally, can link directly to CAM manufacturing. Disadvantages: expensive software, requires training."},
{"topic": "design", "type": "mcq", "q": "AESTHETICS in product design refers to:", "opts": ["How long a product lasts", "How the product looks and feels — its visual and tactile appeal including shape, colour, texture, and proportion", "How easy a product is to manufacture", "The cost of producing the product"], "ans": 1, "explain": "Aesthetics = the sensory appeal of a product: shape, form, colour, texture, line, pattern, symmetry. Influenced by: target market preferences, current trends, cultural context, brand identity. Aesthetic decisions must balance with function and cost."},
{"topic": "design", "type": "mcq", "q": "MARKET PULL occurs when:", "opts": ["A new technology is developed that leads to new products", "Consumer demand or an identified need drives the development of a new product", "A company decides to expand its product range", "A government regulation forces design changes"], "ans": 1, "explain": "Market pull: consumer demand/need drives product development. E.g. demand for lighter laptops led to development of thinner designs. Contrast with technology push: a new technology becomes available and drives new product development."},
{"topic": "design", "type": "mcq", "q": "TECHNOLOGY PUSH occurs when:", "opts": ["A new consumer need is identified", "New technology is developed that enables entirely new products to be created", "The government funds research into new products", "A competitor releases a better product"], "ans": 1, "explain": "Technology push: new technology creates new product possibilities. E.g. the development of touchscreen technology pushed the creation of smartphones and tablets — consumers didn't know they wanted them until the technology made them possible."},
{"topic": "design", "type": "mcq", "q": "Which research technique involves a designer actually USING a product as an end-user would, to identify problems from the user's perspective?", "opts": ["Questionnaire", "Focus group", "User trip", "Competitor analysis"], "ans": 2, "explain": "A user trip (or user journey): the designer uses the product themselves as an ordinary user would, noting problems and issues first-hand. This provides empathetic insight into user experience. E.g. a designer sitting in a wheelchair to experience an accessibility product."},
{"topic": "design", "type": "mcq", "q": "The BENEFITS OF BRANDING for a manufacturer include:", "opts": ["Reduced material costs", "Allowing the product to be sold at a higher price, building customer loyalty, and making the product instantly recognisable", "Making products easier to manufacture", "Reducing the need for advertising"], "ans": 1, "explain": "Branding benefits: premium pricing (customers pay more for trusted brands), customer loyalty (repeat purchases), instant recognition, difficult for competitors to replicate. Examples: Apple, Nike, IKEA — all command higher prices due to strong branding."},
{"topic": "design", "type": "mcq", "q": "A QUESTIONNAIRE used in design research is a type of:", "opts": ["Secondary (desk) research", "Primary (field) research — collecting new data directly from potential users", "Analysis of existing products", "Competitor research"], "ans": 1, "explain": "A questionnaire is primary/field research — it collects new data directly from people. It can reach many respondents cheaply. Key stages: design questions carefully, select a representative sample, collect responses, analyse data, use findings to inform the specification."},
{"topic": "design", "type": "mcq", "q": "FITNESS FOR PURPOSE means a product:", "opts": ["Is the cheapest possible to produce", "Fully meets all the requirements of its intended use — it works correctly and safely for its designed purpose", "Looks attractive to the target market", "Is made from sustainable materials"], "ans": 1, "explain": "Fitness for purpose: the product does exactly what it was designed to do, safely and effectively. A product that is NOT fit for purpose fails to meet its specification. This is used as an evaluation criterion throughout the design process."},
{"topic": "design", "type": "mcq", "q": "Which of the following is a DESIGN FACTOR that affects the development of a product?", "opts": ["The colour of the workshop walls", "Target market, function, aesthetics, ergonomics, performance, and safety", "The designer's favourite materials", "The time of year the product is launched"], "ans": 1, "explain": "The N5 course groups the design factors as Function, Performance (including safety, maintenance and life expectancy), Market, Aesthetics and Ergonomics. All must be considered and balanced when developing a design solution. The relative importance of each factor depends on the product type."},
{"topic": "design", "type": "mcq", "q": "PERFORMANCE as a design factor refers to:", "opts": ["How attractive the product looks", "How well the product functions under expected conditions of use, including durability, maintenance needs, and life expectancy", "The cost of manufacturing the product", "How easy the product is to make"], "ans": 1, "explain": "Performance: how reliably and effectively the product works. Includes: durability (how long it lasts), maintenance requirements, life expectancy, and fitness for purpose under real conditions. High performance requirements may increase cost and complexity."},
{"topic": "design", "type": "mcq", "q": "A WORKING DRAWING is used to:", "opts": ["Show the product in an artistic, attractive way for marketing", "Provide precise dimensions and details needed to manufacture the product", "Give a rough idea of what the product might look like", "Show the product in its environment"], "ans": 1, "explain": "Working drawings (orthographic drawings) show all dimensions, materials, tolerances, and manufacturing details needed to manufacture the product accurately. They use standard conventions: 1st angle or 3rd angle projection, BS/ISO standards for line types and symbols."},
{"topic": "design", "type": "fillin", "q": "The stage of the design process where criteria for the finished product are defined, based on the brief and research, is called the product _____.", "ans": "specification", "explain": "The product specification is a list of measurable criteria the final design must meet: size, weight, material, cost, target user, function, aesthetics, safety standards, etc. It is used to evaluate ideas and final designs throughout the process."},
{"topic": "design", "type": "fillin", "q": "The technique that uses human body measurement data to inform ergonomic design is called _____ data.", "ans": "anthropometric", "explain": "Anthropometric data provides measurements of the human body (e.g. sitting height, hand span, reach). Designers use percentile data (e.g. 5th–95th percentile) to ensure products are suitable for the majority of their target users."},
{"topic": "design", "type": "fillin", "q": "The idea-generation technique that involves listing product attributes in columns and finding combinations of different ways to achieve each is called _____ analysis.", "ans": "morphological", "explain": "Morphological analysis systematically explores design possibilities by breaking the problem into attributes (e.g. shape, material, mechanism) and listing alternatives for each. Combining options generates a large number of potential design concepts."},
{"topic": "design", "type": "fillin", "q": "When new consumer demand drives the development of new products, this is called _____ pull.", "ans": "market", "explain": "Market pull: identified consumer needs or desires drive product development. The market \"pulls\" new products into existence. Technology push is the opposite — new technology creates products the market didn't know it needed."},
{"topic": "design", "type": "fillin", "q": "The process of a designer using a product themselves as an ordinary user would, to identify usability issues, is called a user _____.", "ans": "trip", "explain": "A user trip gives the designer direct, empathetic experience of using a product. Key stages: the designer uses the product in realistic conditions, records problems encountered, and uses findings to inform the design specification."},
{"topic": "materials", "type": "mcq", "q": "Which of the following is classified as a HARDWOOD?", "opts": ["Red pine", "Spruce", "MDF", "Oak"], "ans": 3, "explain": "SQA hardwoods: beech, ash, mahogany, oak. Hardwoods come from broad-leaved trees, most of which are deciduous (lose their leaves in winter). They are generally harder, denser, and more expensive than softwoods. Softwoods (red pine, spruce) come from coniferous (evergreen) trees."},
{"topic": "materials", "type": "mcq", "q": "Which of the following is classified as a SOFTWOOD?", "opts": ["Oak", "Beech", "Red pine", "Ash"], "ans": 2, "explain": "SQA softwoods: red pine and spruce. They come from coniferous/evergreen trees. Generally cheaper, lighter, and easier to work than hardwoods. Widely used in construction (roof timbers, floor joists). Note: the terms \"hard\" and \"soft\" refer to tree type, not always actual hardness (balsa is a hardwood but is soft)."},
{"topic": "materials", "type": "mcq", "q": "Which manufactured board is made from thin layers of wood glued together with alternating grain directions, making it strong in all directions?", "opts": ["MDF", "Chipboard", "Hardboard", "Plywood"], "ans": 3, "explain": "Plywood: layers (plies) of wood veneer glued with alternating grain directions. This gives equal strength in all directions. Advantages: strong, available in large sheets, doesn't warp easily. Disadvantages: unattractive edge grain, may not be suitable for wet conditions (unless exterior grade)."},
{"topic": "materials", "type": "mcq", "q": "MDF (Medium Density Fibreboard) is best described as:", "opts": ["Thin layers of wood glued at right angles", "Fine wood fibres bonded with resin under heat and pressure — smooth, easy to machine, ideal for painting", "Compressed wood chips bonded with resin", "Thin sheets of wood pulp compressed into board"], "ans": 1, "explain": "MDF: fine wood fibres + resin, hot-pressed. Advantages: very smooth surface (ideal for paint/varnish), no grain direction (machines equally in all directions), available in large sheets, cheap. Disadvantages: heavy, not water resistant, edges soak up moisture, produces fine dust when cut."},
{"topic": "materials", "type": "mcq", "q": "FLEXI-PLY (bendable plywood) is used when:", "opts": ["Extra strength is required", "A curved or shaped surface is required — it bends easily because its thin veneers mostly run in the same grain direction", "Waterproofing is the main priority", "The cheapest board is needed"], "ans": 1, "explain": "Flexi-ply is made from thin veneers whose grain mostly runs in the SAME direction (unlike standard plywood's alternating layers), allowing it to bend easily in one direction. Used for curved furniture, display stands, and shaped interior features. Less strong than regular plywood."},
{"topic": "materials", "type": "mcq", "q": "Which metal is classed as a NON-FERROUS metal?", "opts": ["Cast iron", "Mild steel", "High-carbon steel", "Aluminium"], "ans": 3, "explain": "Non-ferrous metals do NOT contain iron: aluminium, copper, brass. Ferrous metals CONTAIN iron: cast iron, mild steel, high-carbon steel, stainless steel. Non-ferrous metals are generally more resistant to corrosion than ferrous metals."},
{"topic": "materials", "type": "mcq", "q": "MILD STEEL is best described as:", "opts": ["Highly resistant to corrosion", "A low-carbon ferrous metal — strong, tough, cheap, and easy to work but rusts unless protected", "An aluminium alloy used for lightweight structures", "A stainless steel suitable for cutlery"], "ans": 1, "explain": "Mild steel: 0.1–0.3% carbon, ferrous. Properties: strong, tough, easy to weld and machine, cheap. Disadvantage: rusts (oxidises) unless protected with paint, galvanising, or plating. Widely used in construction, vehicles, tools."},
{"topic": "materials", "type": "mcq", "q": "What is the main advantage of STAINLESS STEEL over mild steel?", "opts": ["It is cheaper than mild steel", "It is lighter than mild steel", "It is highly resistant to corrosion (rust) due to chromium content", "It is stronger than high-carbon steel"], "ans": 2, "explain": "Stainless steel contains chromium (10.5%+) which forms a protective oxide layer, making it highly corrosion resistant. Used for: cutlery, kitchen equipment, medical instruments, architecture. Disadvantages: more expensive and harder to machine than mild steel."},
{"topic": "materials", "type": "mcq", "q": "HIGH-CARBON STEEL differs from mild steel in that it:", "opts": ["Contains no carbon at all", "Has higher carbon content (0.6–1.4%) making it harder and more brittle — used for cutting tools", "Is more resistant to corrosion", "Is softer and easier to work with"], "ans": 1, "explain": "High-carbon steel: 0.6–1.4% carbon. Much harder than mild steel but more brittle (less tough). Can be hardened and tempered. Used for: cutting tools (chisels, drills, files, blades). Too hard to weld easily."},
{"topic": "materials", "type": "mcq", "q": "ALUMINIUM has which key property that makes it suitable for aircraft and drink cans?", "opts": ["It is the strongest metal available", "It is lightweight with a good strength-to-weight ratio, and is resistant to corrosion", "It is the cheapest metal available", "It is magnetic"], "ans": 1, "explain": "Aluminium: lightweight (low density), good strength-to-weight ratio, naturally corrosion resistant (forms oxide layer), good conductor of heat and electricity, recyclable. Used for: aircraft, vehicles, food packaging, window frames, cookware."},
{"topic": "materials", "type": "mcq", "q": "Which plastic is a THERMOPLASTIC?", "opts": ["Urea formaldehyde", "Melamine formaldehyde", "Epoxy resin", "Acrylic (PMMA)"], "ans": 3, "explain": "Thermoplastics soften when heated and can be remoulded repeatedly: ABS, acrylic (PMMA), polypropylene, polystyrene. Thermosetting plastics SET permanently when cured and CANNOT be remelted: urea formaldehyde, melamine formaldehyde. Remember: Thermo PLASTICS can be re-PLASTICISED."},
{"topic": "materials", "type": "mcq", "q": "ABS (Acrylonitrile Butadiene Styrene) is widely used for products like phone cases and helmets because it is:", "opts": ["Transparent and rigid", "Impact resistant, tough, lightweight, and easy to vacuum form and injection mould", "Highly heat resistant and suitable for cookware", "Biodegradable and environmentally friendly"], "ans": 1, "explain": "ABS properties: impact resistant, tough, lightweight, good surface finish, easy to process (vacuum forming, injection moulding). Used for: helmets, phone cases, LEGO bricks, kitchen appliances, car interior panels."},
{"topic": "materials", "type": "mcq", "q": "POLYPROPYLENE (PP) is often used for living hinges (e.g. on bottle caps) because it:", "opts": ["Is completely rigid and strong", "Can be bent back and forth repeatedly without breaking — has excellent fatigue resistance", "Is transparent", "Is the cheapest plastic available"], "ans": 1, "explain": "Polypropylene: excellent fatigue resistance (can flex thousands of times without breaking), chemical resistant, lightweight, can be sterilised. Used for: living hinges, food containers, chairs, medical equipment, ropes."},
{"topic": "materials", "type": "mcq", "q": "UREA FORMALDEHYDE is a thermosetting plastic used for:", "opts": ["Drinks bottles and food packaging", "Electrical fittings, plug sockets, and switches — it is hard, heat resistant, and a good electrical insulator", "Flexible packaging and carrier bags", "Sports equipment like helmets"], "ans": 1, "explain": "Urea formaldehyde: thermosetting plastic. Properties: hard, brittle, good electrical insulator, heat resistant, white/cream coloured. Used for: electrical fittings, switches, plug bodies, door knobs, and as a wood adhesive/resin (e.g. in chipboard and MDF). Cannot be remelted once set. (Note: PVA glue is polyvinyl acetate, not urea formaldehyde.)"},
{"topic": "materials", "type": "mcq", "q": "MELAMINE FORMALDEHYDE is used for kitchen worktops and crockery because it is:", "opts": ["Flexible and lightweight", "Hard, scratch-resistant, heat-resistant, easy to clean, and can be produced in attractive colours and patterns", "Transparent", "The cheapest plastic available"], "ans": 1, "explain": "Melamine formaldehyde: thermosetting. Properties: very hard, scratch-resistant, heat-resistant, stain-resistant, can be made with decorative surface finishes. Used for: kitchen worktops, melamine crockery, laminates (Formica), children's tableware."},
{"topic": "materials", "type": "fillin", "q": "The SQA hardwoods you must know are: beech, ash, mahogany, and _____.", "ans": "oak", "explain": "The four SQA hardwoods: beech (pale, used for furniture and tool handles — tough and hard-wearing), ash (flexible and tough, used for tool handles and sports equipment), mahogany (dark, attractive, easy to work, used for furniture), oak (strong, attractive grain, used for furniture and flooring)."},
{"topic": "materials", "type": "fillin", "q": "Chipboard is made from wood chips bonded with resin. The manufactured board made from fine wood fibres bonded with resin, sold in thick sheets that are smooth on both faces, is _____.", "ans": "MDF", "explain": "Chipboard: compressed wood chips + resin. Cheap but less strong. Used for flat-pack furniture. MDF: fine wood fibres + resin. Smoother and more uniform. Both are cheaper than solid timber and make use of wood waste. (Hardboard is also made from wood fibres, but is thin and usually smooth on one face only.)"},
{"topic": "materials", "type": "fillin", "q": "Metals that DO NOT contain iron are called _____ metals.", "ans": "non-ferrous", "explain": "Non-ferrous metals (no iron): aluminium, copper, brass. Generally more corrosion-resistant than ferrous metals. Ferrous metals (contain iron): cast iron, mild steel, high-carbon steel, stainless steel. Most ferrous metals rust unless protected."},
{"topic": "materials", "type": "fillin", "q": "Plastics that can be softened and reshaped repeatedly by heating are called _____.", "ans": "thermoplastics", "explain": "Thermoplastics soften when heated and harden when cooled — this process is reversible. Examples: ABS, acrylic, polypropylene, polystyrene. Thermosetting plastics permanently set when cured (cross-linking of polymer chains). Examples: urea formaldehyde, melamine formaldehyde."},
{"topic": "tools", "type": "mcq", "q": "OUTSIDE CALLIPERS are used to:", "opts": ["Mark parallel lines on wood", "Measure the EXTERNAL diameter or thickness of a cylindrical or round object", "Scribe lines on metal", "Check if a surface is flat"], "ans": 1, "explain": "Outside callipers measure external diameters (e.g. turned wooden or metal cylinders on a lathe). The callipers are set to the diameter, then checked against a steel rule. Inside callipers measure internal diameters (e.g. inside a pipe)."},
{"topic": "tools", "type": "mcq", "q": "A MORTISE GAUGE is used to:", "opts": ["Check that a surface is at 90°", "Mark TWO parallel lines simultaneously — used for marking out mortise and tenon joints", "Measure the diameter of a hole", "Score a line along the grain of wood"], "ans": 1, "explain": "A mortise gauge has two adjustable pins, allowing two parallel lines to be marked at once. Used to mark both sides of a mortise and the corresponding tenon simultaneously, ensuring they match. A marking gauge has only one pin (marks one line)."},
{"topic": "tools", "type": "mcq", "q": "A MARKING GAUGE is used to:", "opts": ["Check angles of 45° or 90°", "Mark a single line parallel to an edge on wood — typically for marking depth of cuts", "Measure inside diameters", "Test if a surface is perfectly flat"], "ans": 1, "explain": "A marking gauge scores a single line parallel to an edge, at a set distance. Used for marking shoulder lines for joints, depth lines, etc. The stock (fence) runs along the face of the wood while the pin/spur scribes the line."},
{"topic": "tools", "type": "mcq", "q": "ODD-LEG CALLIPERS are used to:", "opts": ["Measure external diameters", "Mark lines parallel to an EDGE on metal — one leg runs along the edge while the other scribes", "Check right angles on metal", "Measure depth of holes"], "ans": 1, "explain": "Odd-leg callipers (hermaphrodite callipers): one leg has a point, the other has a curved foot that runs along the edge of metal. Used to scribe a line parallel to an edge on sheet metal — similar to how a marking gauge is used on wood."},
{"topic": "tools", "type": "mcq", "q": "A TRY SQUARE is used to:", "opts": ["Measure angles of 45°", "Check and mark RIGHT ANGLES (90°) on wood", "Measure internal dimensions", "Mark circles on wood"], "ans": 1, "explain": "A try square checks that surfaces are at 90° (square) to each other and marks 90° lines across the grain. The stock (handle) is held against the face of the wood. An engineer's square is used on metal. A sliding bevel can be set to any angle."},
{"topic": "tools", "type": "mcq", "q": "A TENON SAW is best used for:", "opts": ["Cutting curved shapes in wood", "Cutting along the grain of long timber boards", "Making accurate straight cuts across the grain for joints — its stiffened back prevents flexing", "Cutting sheet metal"], "ans": 2, "explain": "Tenon saw: stiff back (brass/steel spine) prevents blade flexing, giving accurate straight cuts. Used for cutting tenons, joints, and accurate cross-grain cuts. Finer teeth than a panel saw. A coping saw cuts curves; a hacksaw cuts metal."},
{"topic": "tools", "type": "mcq", "q": "A COPING SAW is used to:", "opts": ["Cut straight lines in thick timber", "Cut accurate joints in wood", "Cut CURVED shapes in wood or thin materials — the thin blade can turn to follow curves", "Cut sheet metal"], "ans": 2, "explain": "Coping saw: very thin, fine-toothed blade held in a C-frame under tension. Used to cut intricate curves and internal cutouts in wood, plastic, and thin materials. The blade can be rotated to follow different cut directions. A scroll saw is the machine equivalent."},
{"topic": "tools", "type": "mcq", "q": "Which type of CHISEL has a bevelled (angled) edge allowing it to get into corners and dovetail joints?", "opts": ["Mortise chisel", "Bevel-edged chisel", "Firmer chisel", "Cold chisel"], "ans": 1, "explain": "Bevel-edged chisel: sides are bevelled (angled), allowing the chisel to access tight corners, dovetails, and angled areas. Mortise chisel: thick, strong blade for chopping out mortises — withstands heavy mallet blows. Used with a wooden mallet (not a hammer)."},
{"topic": "tools", "type": "mcq", "q": "A BALL-PEIN hammer is used to:", "opts": ["Drive nails into wood", "Drive wooden mallets", "Work with metal — the ball end is used for peining over rivets and shaping metal", "Remove nails with its claw"], "ans": 2, "explain": "Ball-pein hammer: the rounded (ball) end is used for riveting (spreading rivet heads) and forming/shaping metal. The flat face drives punches and chisels on metal. A claw hammer removes nails from wood. A cross-pein hammer is used to start panel pins and small nails."},
{"topic": "tools", "type": "mcq", "q": "A TWIST DRILL BIT is used to:", "opts": ["Create large flat-bottomed holes in wood", "Make countersink holes for screw heads", "Drill holes in both wood and metal — the most common general-purpose drill bit", "Drill to a precise depth with a flat bottom"], "ans": 2, "explain": "Twist drill bits: most common type, used in both wood and metal. The spiral flutes remove swarf/waste as drilling proceeds. A Forstner bit creates large, flat-bottomed holes in wood. A countersink bit creates angled recesses for screw heads."},
{"topic": "tools", "type": "mcq", "q": "A FORSTNER BIT is used to:", "opts": ["Drill small precise holes in metal", "Create large, flat-bottomed holes in wood — ideal for recessing hinges", "Cut threads inside a hole", "Mark the centre of a hole before drilling"], "ans": 1, "explain": "Forstner bit: creates large, clean, flat-bottomed holes in wood. Used for: hinge recesses (cup hinges) and counterbored holes. Gives a much cleaner result than a spade bit. Best used in a pillar drill for accuracy."},
{"topic": "tools", "type": "mcq", "q": "Before using a PILLAR DRILL, which safety check is essential?", "opts": ["Oil the drill bit", "Remove the chuck key before switching on", "Put on a high-visibility jacket", "Measure the depth of the hole with a ruler"], "ans": 1, "explain": "The chuck key MUST be removed before switching on — if left in, it becomes a dangerous projectile. Other pillar drill safety checks: guard is down, work is clamped (not hand-held), correct speed selected for material, drill bit is secure and correct size."},
{"topic": "tools", "type": "mcq", "q": "PARALLEL TURNING on a centre lathe produces:", "opts": ["A tapered (cone-shaped) surface", "A uniform cylinder of constant diameter along its length", "A stepped profile with different diameters", "A knurled (textured) surface"], "ans": 1, "explain": "Parallel turning: the cutting tool moves parallel to the workpiece axis, producing a cylinder of constant diameter. Taper turning: tool moves at an angle, producing a cone. Step turning: different diameter sections. Knurling: rolls a pattern into the surface for grip."},
{"topic": "tools", "type": "mcq", "q": "Which surface finishing technique would you use to PROTECT a wooden product from moisture while enhancing the natural grain?", "opts": ["Painting with gloss paint", "Dip coating in plastic", "Oiling or varnishing — both provide moisture protection while letting the natural grain show", "Electroplating"], "ans": 2, "explain": "Oiling (e.g. linseed oil, teak oil): penetrates the wood, nourishes it, and provides water resistance while showing natural grain. Varnishing: clear coat that sits on the surface, very durable and water resistant. Both are suitable for furniture. Paint hides the grain."},
{"topic": "tools", "type": "mcq", "q": "DIP COATING (plastic coating) is used to:", "opts": ["Apply a wood stain", "Apply a layer of plastic to metal objects such as tool handles and dishwasher racks — provides grip, insulation, and corrosion protection", "Apply varnish to timber", "Electroplate a metal surface"], "ans": 1, "explain": "Dip coating: metal component is pre-heated, then dipped into a fluidised bed of thermoplastic powder (e.g. PVC or polyethylene). The powder melts onto the hot metal, forming a smooth plastic coating. Provides: corrosion protection, grip, electrical insulation."},
{"topic": "tools", "type": "mcq", "q": "A MORTISE AND TENON joint is used to:", "opts": ["Join two pieces of timber end-to-end", "Join two pieces of timber at a CORNER or T-junction — very strong and traditional woodwork joint", "Join sheet materials using bolts", "Join metal components using welding"], "ans": 1, "explain": "Mortise and tenon: the tenon (rectangular projection) on one piece fits into the mortise (rectangular hole) in another. Used for: door/window frames, chair legs, furniture construction. Very strong in tension and torsion. Traditional cabinet-making joint."},
{"topic": "tools", "type": "mcq", "q": "PVA adhesive is:", "opts": ["A two-part epoxy suitable for joining metals and plastics", "A water-based white glue for joining porous materials like wood and paper — dries clear", "A contact adhesive for bonding leather and rubber", "A thermoplastic adhesive applied with a hot glue gun"], "ans": 1, "explain": "PVA (Polyvinyl acetate): water-based wood glue. Advantages: non-toxic, easy to clean up, bonds wood strongly, dries clear, cheap. Disadvantages: standard PVA is not suitable for wet conditions (water-resistant exterior grades exist), slow setting time, not suitable for metals or plastics."},
{"topic": "tools", "type": "mcq", "q": "EPOXY RESIN adhesive is used to:", "opts": ["Glue wood only", "Bond together different materials such as metal to plastic, metal to glass, and ceramics — very strong two-part adhesive", "Apply a surface coating to metal", "Weld plastic components"], "ans": 1, "explain": "Epoxy resin: two-part adhesive (resin + hardener mixed together). Very strong, bonds most materials including metals, glass, ceramics, and plastics. Water resistant, chemical resistant. Disadvantages: requires accurate mixing, slow cure time, expensive."},
{"topic": "tools", "type": "fillin", "q": "The hand tool used to mark TWO parallel lines simultaneously for marking out mortise and tenon joints is called a _____ gauge.", "ans": "mortise", "explain": "A mortise gauge has two adjustable points/pins that can be set to the exact width of a mortise chisel. Both lines are marked in one pass, ensuring the mortise and tenon will match precisely. A marking gauge has only one pin."},
{"topic": "tools", "type": "fillin", "q": "The tool used to measure the external diameter of a turned cylinder on a lathe is called _____ callipers.", "ans": "outside", "explain": "Outside callipers are set to span the diameter of the cylinder, then checked against a steel rule. They cannot give a direct reading — they must be compared to a rule. Digital vernier callipers can give a direct reading and are more accurate."},
{"topic": "tools", "type": "fillin", "q": "The surface finishing process where metal is pre-heated then dipped into thermoplastic powder is called _____ coating.", "ans": "dip", "explain": "Dip coating (fluidised bed coating): heated metal dips into a fluidised bed of plastic powder which melts onto the surface. Produces a smooth, colourful, durable plastic layer. Provides corrosion protection, grip, and electrical insulation. Used for: tool handles, dishwasher baskets, playground equipment."},
{"topic": "tools", "type": "fillin", "q": "The woodwork joint where a rectangular projection fits into a corresponding hole in another piece of wood is called a mortise and _____ joint.", "ans": "tenon", "explain": "The tenon is the rectangular \"tongue\" cut on the end of one piece of wood. The mortise is the matching rectangular hole cut in the other. The tenon fits snugly into the mortise. Glue and/or a wooden peg (dowel) can be used to secure the joint permanently."},
{"topic": "commercial", "type": "mcq", "q": "VACUUM FORMING is used to produce:", "opts": ["Large solid metal castings", "Thin-walled plastic products by heating a thermoplastic sheet and drawing it over a mould using vacuum pressure", "Complex 3D objects layer by layer from digital files", "Hollow plastic products by rotating a mould"], "ans": 1, "explain": "Vacuum forming: thermoplastic sheet is clamped and heated until soft, then the mould is raised into it while a vacuum is applied underneath, sucking the plastic tightly around the mould. Used for: food packaging (yoghurt pots, trays), baths, car dashboards. Suitable for ABS, acrylic, polystyrene."},
{"topic": "commercial", "type": "mcq", "q": "In VACUUM FORMING, what type of pattern/mould is required?", "opts": ["A two-part mould with a top and bottom half", "A one-sided mould/former — smooth sides, no undercuts, draft angles to allow removal", "A disposable mould that breaks away after forming", "A split mould for complex shapes with undercuts"], "ans": 1, "explain": "Vacuum forming moulds: one-sided, must have smooth sides tapering slightly (draft angles of 3-5°) so the plastic can be removed without sticking. No undercuts allowed. Can be made from wood, MDF, resin, or aluminium. Identifying features of vacuum-formed products: thin walls that thin further at corners and deep sections, draft angles, rounded corners/radii, and webbing or a trimmed flange edge. Radii on the pattern help stop thinning and stop the plastic sticking."},
{"topic": "commercial", "type": "mcq", "q": "INJECTION MOULDING is used to produce:", "opts": ["Large flat plastic sheets", "Complex 3D plastic products in large quantities — molten plastic is injected under pressure into a two-part mould", "Hollow objects by spinning molten plastic in a mould", "Products from thin plastic sheets using a vacuum"], "ans": 1, "explain": "Injection moulding: thermoplastic granules are melted, then injected under high pressure into a precision two-part metal mould. On cooling, the mould opens and the product is ejected. Used for: phone cases, bottle caps, LEGO bricks, automotive parts. High tooling costs but very cheap per unit at volume."},
{"topic": "commercial", "type": "mcq", "q": "Which of the following is an IDENTIFYING FEATURE of an injection-moulded product?", "opts": ["Only one smooth side and one rough side", "Ejector pin marks and a small injection (sprue/gate) mark where the plastic entered the mould", "Layers visible from the 3D printing process", "A rough, sandy surface texture"], "ans": 1, "explain": "Injection-moulded products have: ejector pin marks (where pins pushed the product out), an injection/sprue mark (where molten plastic entered the mould), sometimes flash or a split line where the mould halves meet, a good surface finish, and can have complex 3D shapes with undercuts (using side-pulls). Fine detail and tight tolerances possible."},
{"topic": "commercial", "type": "mcq", "q": "ROTATIONAL MOULDING is used to produce:", "opts": ["Flat plastic sheets", "Small, precise plastic components", "Large hollow plastic products such as water tanks, kayaks, and playground equipment", "Thin-walled food packaging trays"], "ans": 2, "explain": "Rotational moulding: plastic powder is loaded into a hollow mould which rotates on two axes inside an oven. The plastic melts and coats the inside of the mould evenly. Used for: water tanks, kayaks, chemical storage containers, playground equipment, road cones. Relatively low tooling cost vs injection moulding."},
{"topic": "commercial", "type": "mcq", "q": "SAND CASTING is used to produce:", "opts": ["Thin-walled plastic products", "Small precision plastic components", "Metal objects (particularly complex shapes) by pouring molten metal into a sand mould", "Lightweight composite products"], "ans": 2, "explain": "Sand casting: a pattern (usually wood or metal) is pressed into damp sand to create a mould. Molten metal is poured in and left to solidify. The sand mould is broken to release the casting. Used for: engine blocks, manhole covers, complex metal components. Relatively low tooling cost. Surface finish requires machining."},
{"topic": "commercial", "type": "mcq", "q": "What is the IDENTIFYING FEATURE of a sand-cast product?", "opts": ["A very smooth, mirror-like surface finish", "A rough, granular surface texture from the sand mould, and a parting line", "Layers from the casting process visible on the surface", "A uniform wall thickness throughout"], "ans": 1, "explain": "Sand-cast products have a characteristic rough, granular surface texture (from the sand mould) and a parting line where the two halves of the mould met. The surface usually requires machining/finishing to achieve a smooth result."},
{"topic": "commercial", "type": "mcq", "q": "DIE CASTING differs from sand casting in that it:", "opts": ["Uses plastic instead of metal", "Uses a permanent metal mould (die) instead of a sand mould — gives much better surface finish, accuracy, and faster production rates", "Is used only for thermoplastic materials", "Requires lower temperatures than sand casting"], "ans": 1, "explain": "Die casting: molten metal (usually zinc, aluminium, or magnesium alloys) is injected under pressure into a permanent metal mould (die). Advantages over sand casting: better surface finish, higher accuracy, faster production, can produce thinner walls. Used for: toy cars, computer components, power tool housings."},
{"topic": "commercial", "type": "mcq", "q": "CAM (Computer-Aided Manufacture) refers to:", "opts": ["Using computers to design products", "Using computer-controlled machines to manufacture products, guided by CAD data", "Using computers to manage company accounts", "Using computers to advertise products online"], "ans": 1, "explain": "CAM: computer-controlled machines (CNC lathes, milling machines, laser cutters, 3D printers) manufacture products directly from CAD data. Benefits: high accuracy and consistency, can run 24/7, no human error, complex shapes possible. Drawbacks: high initial cost, requires skilled programmers, not economic for very small runs."},
{"topic": "commercial", "type": "mcq", "q": "Which of the following is a BENEFIT of using a LASER CUTTER in manufacture?", "opts": ["It can cut any material including thick metals", "Very high precision, clean cuts with no tool contact, can cut complex 2D shapes from digital files, minimal waste", "It is cheaper than hand tools", "It works faster than a 3D printer for all applications"], "ans": 1, "explain": "Laser cutter benefits: very high precision, clean edges (no burring), complex 2D shapes from digital files, minimal material waste, no physical force on material (no clamping distortion). Drawbacks: limited to 2D cuts, burned edges on some materials, expensive, cannot cut very thick materials, fumes produced."},
{"topic": "commercial", "type": "mcq", "q": "A 3D PRINTER (additive manufacture) works by:", "opts": ["Removing material from a block using a cutting tool", "Building up a product layer by layer from digital CAD data — adding material rather than removing it", "Pressing molten plastic into a mould under high pressure", "Using a laser to cut flat shapes from sheets"], "ans": 1, "explain": "3D printing (additive manufacture): builds objects layer by layer. The CAD file is sliced into layers and each layer is deposited/cured. Benefits: complex shapes possible, no tooling costs, great for prototypes and one-offs, can make internal structures. Drawbacks: slow, limited materials, rough surface finish, less strong than moulded parts."},
{"topic": "commercial", "type": "mcq", "q": "STANDARD COMPONENTS are pre-manufactured parts (such as screws, nuts, bolts, and hinges) that offer which advantage?", "opts": ["They are always made from the cheapest materials", "They save time and cost because they do not need to be manufactured from scratch — they are cheap, readily available, and interchangeable", "They are always stronger than custom-made components", "They can only be used in mass production"], "ans": 1, "explain": "Standard components (fasteners, hinges, knock-down fittings, etc.): benefits = cheaper than custom manufacture, widely available, interchangeable (a standard M6 bolt fits any M6 nut), tested and certified. Examples: cam-lock fittings in flat-pack furniture, hinges, drawer runners."},
{"topic": "commercial", "type": "mcq", "q": "KNOCK-DOWN (KD) fittings are used in furniture because they:", "opts": ["Provide the strongest permanent joint possible", "Allow flat-pack furniture to be assembled and DISASSEMBLED using simple tools and no permanent glue — enabling flat packing and easy transport", "Are the cheapest type of joint", "Are only suitable for metal furniture"], "ans": 1, "explain": "Knock-down fittings: allow furniture to be assembled and taken apart multiple times. Examples: cam-lock (cam and dowel), barrel nuts and bolts, corner blocks. Benefits: flat packing for transport and storage, easy assembly with minimal tools, no specialist skills required."},
{"topic": "commercial", "type": "mcq", "q": "MASS PRODUCTION involves:", "opts": ["Making one unique product at a time to a specific order", "Producing large quantities of identical products continuously — highly automated, low cost per unit, requires large capital investment", "Making small batches of similar products", "Custom production by skilled craftspeople"], "ans": 1, "explain": "Mass (flow) production: highly automated, continuous production of identical products. Low unit cost due to economies of scale. Examples: car manufacturing, bottled drinks, mass-produced electronics. Requires high investment in tooling and machinery. Little job variety for workers."},
{"topic": "commercial", "type": "mcq", "q": "ONE-OFF production involves:", "opts": ["Producing millions of identical items", "Making ONE unique product made to a specific order or brief — highest quality but slowest and most expensive per unit", "Making batches of identical products", "Using automated production lines"], "ans": 1, "explain": "One-off (job) production: single unique items made to specific requirements. Highest quality and customisation possible. Examples: bespoke furniture, bridges, aircraft prototypes, custom jewellery. Most expensive per unit, requires highly skilled workers. Cannot benefit from economies of scale."},
{"topic": "commercial", "type": "mcq", "q": "Which method supports SUSTAINABILITY in design and manufacture?", "opts": ["Using the cheapest materials regardless of source", "Designing for disassembly and recycling, using renewable materials, reducing energy consumption, and minimising waste", "Maximising production output with no environmental considerations", "Using single-use plastics for all packaging"], "ans": 1, "explain": "Sustainable design methods: use renewable/recycled materials, design for disassembly (easy recycling), reduce material waste, minimise energy use in production, extend product life expectancy, use local suppliers (reduce transport emissions), design for repair rather than disposal."},
{"topic": "commercial", "type": "fillin", "q": "The commercial manufacturing process that heats a thermoplastic sheet and draws it over a mould using vacuum pressure is called _____ forming.", "ans": "vacuum", "explain": "Vacuum forming process: (1) Thermoplastic sheet clamped in frame. (2) Heater softens the plastic. (3) Mould raised or frame lowered over mould. (4) Vacuum applied — atmospheric pressure pushes plastic tightly around mould. (5) Cool, trim, and remove. Used for shallow-relief shapes."},
{"topic": "commercial", "type": "fillin", "q": "The casting process that uses a two-part mould made from damp sand to produce metal objects is called _____ casting.", "ans": "sand", "explain": "Sand casting: pattern pressed into damp (greensand) or chemically bonded sand to make two-part mould. Molten metal poured in through a sprue/runner. Sand mould broken to release casting. Surface needs machining. Cheap tooling, suitable for complex shapes and large objects."},
{"topic": "commercial", "type": "fillin", "q": "The process of building up a 3D object layer by layer from a digital CAD file is called _____ manufacture.", "ans": "additive", "explain": "Additive manufacture (3D printing): material is added layer by layer (rather than subtracted as in CNC machining). Materials include: PLA plastic, ABS, resin, metal powders, concrete. Excellent for prototypes, custom one-off parts, and complex geometries that cannot be machined."},
{"topic": "commercial", "type": "fillin", "q": "Pre-manufactured parts such as screws, hinges, and cam-lock fittings that are made to standard sizes are called _____ components.", "ans": "standard", "explain": "Standard components are manufactured to universal sizes and specifications. Benefits: cheap (mass produced), always available, interchangeable, already tested and certified to safety standards. Examples: M-series screws/bolts, standard hinges, electrical components (resistors, capacitors)."}
];

// Worksheets: kind = mcq (opts: [html, isCorrect]) | blanks (body html with inputs, ids, answers) | punnett | written (model answer in reveal)
const SHEETS=[
 {
  "title": "Design worksheet",
  "icon": "✏️",
  "keyAreas": "<strong>SQA Key Areas:</strong> Design process · Product specification · Idea generation · Modelling · Design factors · Ergonomics · Research techniques",
  "sections": [
   {
    "head": "Section A — Design Process &amp; Factors",
    "qs": [
     {
      "kind": "mcq",
      "label": "Q1 · Multiple Choice",
      "text": "A designer creates a new chair for elderly users. Which design factor is MOST important?",
      "reveal": "<strong>C — Ergonomics.</strong> For elderly users, ergonomics is critical: correct seat height, comfortable back support, armrests at right height, non-slip feet. Anthropometric data for the target age group should inform dimensions. Safety is also key.",
      "opts": [
       [
        "Aesthetics — the chair must look fashionable",
        false
       ],
       [
        "Cost — it must be the cheapest possible",
        false
       ],
       [
        "Ergonomics — it must fit human body dimensions and be safe and comfortable",
        true
       ],
       [
        "Branding — it must match the company logo colours",
        false
       ]
      ]
     },
     {
      "kind": "blanks",
      "label": "Q2 · Fill in the Blanks — Design Process",
      "text": "Complete the design process:",
      "reveal": "<strong>Full answer:</strong> Brief → <strong>Research</strong> → Product <strong>Specification</strong> → Idea <strong>Generation</strong> → Development → <strong>Modelling</strong> → Planning → Manufacture → <strong>Evaluate</strong>",
      "body": "Brief → <input class=\"eq-in\" id=\"eqd2a\" placeholder=\"????????\"/> → Product <input class=\"eq-in\" id=\"eqd2b\" placeholder=\"?????????????\"/> → Idea <input class=\"eq-in\" id=\"eqd2c\" placeholder=\"??????????\"/> → Development → <input class=\"eq-in\" id=\"eqd2d\" placeholder=\"??????????\"/> → Planning → Manufacture → <input class=\"eq-in\" id=\"eqd2e\" placeholder=\"????????\"/>",
      "ids": [
       "eqd2a",
       "eqd2b",
       "eqd2c",
       "eqd2d",
       "eqd2e"
      ],
      "answers": [
       "research",
       "specification",
       "generation",
       "modelling",
       "evaluate"
      ]
     },
     {
      "kind": "mcq",
      "label": "Q3 · Multiple Choice",
      "text": "A designer makes a quick rough 3D model from cardboard to explore the shape. What type of model is this?",
      "reveal": "<strong>B — Sketch model.</strong> Sketch (rough) models are made quickly and cheaply from cardboard or foam to explore 3D proportions and form early in the design process. They are not intended to look finished.",
      "opts": [
       [
        "A scale model",
        false
       ],
       [
        "A sketch model",
        true
       ],
       [
        "A working prototype",
        false
       ],
       [
        "A CAD model",
        false
       ]
      ]
     },
     {
      "kind": "written",
      "label": "Q4 · Short Answer (3 marks)",
      "text": "Describe THREE advantages of using CAD (Computer-Aided Design) modelling in the design process.",
      "reveal": "<strong>Model answer (1 mark each, any 3):</strong><br/> Easy to modify without starting again. (1) | Can be viewed from any angle in 3D. (1) | Virtual testing without a physical model. (1) | Can be shared digitally. (1) | Links directly to CAM machines. (1)",
      "placeholder": "Advantage 1:\nAdvantage 2:\nAdvantage 3:",
      "tall": false
     },
     {
      "kind": "written",
      "label": "Q5 · Short Answer (2 marks)",
      "text": "Explain the difference between MARKET PULL and TECHNOLOGY PUSH. Give an example of each.",
      "reveal": "<strong>Market pull:</strong> consumer demand drives new products. E.g. demand for lighter laptops drove ultrabooks. (1)<br/><strong>Technology push:</strong> new technology creates new products. E.g. touchscreens pushed smartphones. (1)",
      "placeholder": "Market pull: …\nTechnology push: …",
      "tall": false
     }
    ]
   }
  ]
 },
 {
  "title": "Materials worksheet",
  "icon": "🪵",
  "keyAreas": "<strong>SQA Key Areas:</strong> Hardwoods · Softwoods · Manufactured boards · Ferrous &amp; non-ferrous metals · Thermoplastics · Thermosetting plastics",
  "sections": [
   {
    "head": "Section A — Timber &amp; Boards",
    "qs": [
     {
      "kind": "mcq",
      "label": "Q1 · Multiple Choice",
      "text": "A manufacturer needs a smooth, inexpensive board with no visible grain that is ideal for painting. Which is MOST suitable?",
      "reveal": "<strong>B — MDF.</strong> MDF has a very smooth, grain-free surface ideal for painting. It machines well in all directions and is inexpensive. Disadvantage: not water resistant, heavy, produces harmful dust when cut.",
      "opts": [
       [
        "Plywood",
        false
       ],
       [
        "MDF (Medium Density Fibreboard)",
        true
       ],
       [
        "Oak",
        false
       ],
       [
        "Red pine",
        false
       ]
      ]
     },
     {
      "kind": "written",
      "label": "Q2 · Short Answer (4 marks)",
      "text": "Name TWO hardwoods and TWO softwoods from the SQA course, and state ONE use for each.",
      "reveal": "<strong>Hardwoods (any 2):</strong> Oak (furniture/flooring) · Ash (tool handles/sports equipment) · Beech (furniture/toys) · Mahogany (furniture/doors)<br/><strong>Softwoods (both):</strong> Red pine (construction/furniture) · Spruce (construction/aircraft)",
      "placeholder": "Hardwood 1: … Use: …\nHardwood 2: … Use: …\nSoftwood 1: … Use: …\nSoftwood 2: … Use: …",
      "tall": false
     },
     {
      "kind": "blanks",
      "label": "Q3 · Fill in the Blanks — Metals",
      "text": "",
      "reveal": "<strong>Ferrous</strong> metals (contain iron). <strong>Mild steel</strong>: cheap, strong, welds easily but rusts. <strong>Aluminium</strong>: lightweight, corrosion resistant (oxide layer), good conductor of heat/electricity.",
      "body": "Metals that contain iron are called <input class=\"eq-in\" id=\"eqm3a\" placeholder=\"????????\"/> metals.<br/> <input class=\"eq-in\" id=\"eqm3b\" placeholder=\"?????? ?????\"/> is a ferrous metal: cheap and strong but rusts without protection.<br/> <input class=\"eq-in\" id=\"eqm3c\" placeholder=\"??????????\"/> is a non-ferrous metal: lightweight and corrosion resistant — ideal for aircraft.",
      "ids": [
       "eqm3a",
       "eqm3b",
       "eqm3c"
      ],
      "answers": [
       "ferrous",
       "mild steel",
       "aluminium"
      ]
     },
     {
      "kind": "mcq",
      "label": "Q4 · Multiple Choice",
      "text": "A kitchen worktop must be hard, scratch-resistant, and heat-resistant. Which plastic is MOST suitable?",
      "reveal": "<strong>C — Melamine formaldehyde.</strong> A thermosetting plastic — hard, scratch-resistant, heat-resistant, stain-resistant, easy to clean. Cannot be remelted. Used for kitchen worktops, melamine crockery, and laminates (e.g. Formica).",
      "opts": [
       [
        "Polypropylene",
        false
       ],
       [
        "ABS",
        false
       ],
       [
        "Melamine formaldehyde",
        true
       ],
       [
        "Polystyrene",
        false
       ]
      ]
     }
    ]
   }
  ]
 },
 {
  "title": "Commercial worksheet",
  "icon": "🏭",
  "keyAreas": "<strong>SQA Key Areas:</strong> Vacuum forming · Injection moulding · Sand casting · Rotational moulding · Die casting · CAM · Laser cutter · 3D printing · Sustainability",
  "sections": [
   {
    "head": "Section A — Manufacturing Processes",
    "qs": [
     {
      "kind": "mcq",
      "label": "Q1 · Multiple Choice",
      "text": "A company wants to manufacture yoghurt pots in large quantities from polystyrene sheet. Which process is MOST suitable?",
      "reveal": "<strong>A — Vacuum forming.</strong> Ideal for thin-walled thermoplastic products like food trays and yoghurt pots. Heat sheet → draw over mould using vacuum → cool → trim. Fast and cheap at volume for shallow-relief shapes.",
      "opts": [
       [
        "Vacuum forming",
        true
       ],
       [
        "Sand casting",
        false
       ],
       [
        "Rotational moulding",
        false
       ],
       [
        "Die casting",
        false
       ]
      ]
     },
     {
      "kind": "blanks",
      "label": "Q2 · Fill in the Blanks — Vacuum Forming Mould",
      "text": "",
      "reveal": "<strong>One-sided</strong> mould. <strong>Draft</strong> angles allow cooled plastic to be removed. <strong>Undercuts</strong> (overhanging features) would trap the plastic and prevent removal.",
      "body": "The mould must be <input class=\"eq-in\" id=\"eqc2a\" placeholder=\"???\"/> sided (only one surface formed).<br/> It must have <input class=\"eq-in\" id=\"eqc2b\" placeholder=\"?????\"/> angles (3-5°) so the product can be removed.<br/> It must NOT have <input class=\"eq-in\" id=\"eqc2c\" placeholder=\"??????????\"/> as these would trap the plastic.",
      "ids": [
       "eqc2a",
       "eqc2b",
       "eqc2c"
      ],
      "answers": [
       "one",
       "draft",
       "undercuts"
      ]
     },
     {
      "kind": "written",
      "label": "Q3 · Short Answer (4 marks)",
      "text": "Compare 3D printing with injection moulding — state TWO advantages of each process.",
      "reveal": "<strong>3D printing:</strong> No tooling cost (1) · Complex internal shapes possible (1) · Easy to modify design (1)<br/><strong>Injection moulding:</strong> Very cheap per unit at volume (1) · High accuracy and surface finish (1) · Fast production rate (1)",
      "placeholder": "3D printing advantages:\n1.\n2.\n\nInjection moulding advantages:\n1.\n2.",
      "tall": false
     },
     {
      "kind": "mcq",
      "label": "Q4 · Multiple Choice",
      "text": "A manufacturer needs to produce large hollow plastic water storage tanks. Which process is MOST suitable?",
      "reveal": "<strong>C — Rotational moulding.</strong> Used for large, hollow plastic products: water tanks, kayaks, playground equipment, road cones. Plastic powder is loaded into a hollow mould which rotates on two axes in an oven, coating the inside evenly.",
      "opts": [
       [
        "Vacuum forming",
        false
       ],
       [
        "Injection moulding",
        false
       ],
       [
        "Rotational moulding",
        true
       ],
       [
        "Die casting",
        false
       ]
      ]
     }
    ]
   }
  ]
 }
];

// Key facts reference
const FACTS=[
 {
  "h": "✏️ The Design Process",
  "cards": [
   [
    "Design process stages",
    "Brief → Analysis → Research → Specification → Ideas → Development → Modelling → Planning → Manufacture → Evaluation"
   ],
   [
    "Design brief vs specification",
    "<b>Brief:</b> short statement of the problem or need<br/><b>Specification:</b> detailed list of requirements the product must meet, used to evaluate ideas and the final product"
   ],
   [
    "Design factors",
    "Function · Performance · Market · Aesthetics · Ergonomics<br/><b>Function:</b> primary &amp; secondary function · <b>Performance:</b> safety, maintenance, life expectancy, fitness for purpose · <b>Market:</b> target market, branding, technology push &amp; market pull"
   ],
   [
    "Ergonomics & anthropometrics",
    "<b>Ergonomics:</b> how people interact with a product — comfort, safety, ease of use<br/><b>Anthropometrics:</b> body measurement data; designers often use the 5th–95th percentile range"
   ],
   [
    "Modelling",
    "Sketch models · Scale models · Block models · Computer-generated (3D CAD) models<br/>Used to generate &amp; explore, test &amp; refine, and communicate ideas — e.g. checking size, proportion, function and ergonomics before manufacture"
   ]
  ]
 },
 {
  "h": "🪵 Materials & Properties",
  "cards": [
   [
    "Hardwoods",
    "From broad-leaved (mostly deciduous) trees · Slow growing, usually more expensive<br/>Beech · Ash · Mahogany · Oak"
   ],
   [
    "Softwoods",
    "From coniferous (cone-bearing, evergreen) trees · Faster growing, cheaper<br/>Red pine (Scots pine) · Spruce"
   ],
   [
    "Manufactured boards",
    "Made from wood fibres, particles or veneers · Available in large stable sheets<br/>Plywood · Flexi-ply · MDF · Chipboard · Hardboard"
   ],
   [
    "Metals",
    "<b>Ferrous</b> (contain iron, usually magnetic; most rust unless protected — stainless steel resists corrosion): iron, cast iron, mild steel, high-carbon steel, stainless steel<br/><b>Non-ferrous</b> (no iron): aluminium, copper, brass<br/><b>Alloys</b>: mixtures of a metal with other elements, e.g. brass = copper + zinc, steel = iron + carbon"
   ],
   [
    "Plastics",
    "<b>Thermoplastics</b> soften when reheated and can be reshaped: ABS, acrylic, polypropylene, polystyrene<br/><b>Thermosetting</b> plastics set permanently and cannot be reshaped by heating: urea formaldehyde, melamine formaldehyde"
   ],
   [
    "Key properties",
    "Strength · Hardness · Toughness · Durability · Flexibility · Malleability · Ductility · Conductivity · Corrosion resistance"
   ]
  ]
 },
 {
  "h": "🔧 Tools & Processes",
  "cards": [
   [
    "Measuring & marking out",
    "Rule · Try square · Engineer's square · Marking gauge · Mortise gauge · Scriber · Centre punch · Dividers · Callipers (outside &amp; odd-leg)"
   ],
   [
    "Wasting, shaping, forming",
    "<b>Wasting:</b> removing material (sawing, drilling, filing, turning)<br/><b>Shaping/forming:</b> changing shape without removing material (bending, laminating, vacuum forming)"
   ],
   [
    "Joining methods",
    "<b>Wood joints:</b> mortise &amp; tenon, lap, rub, halving, dowel, rebate, housing<br/><b>Adhesives:</b> PVA (wood), epoxy resin (mixed materials)<br/><b>Metal:</b> pop-riveting, welding<br/><b>Fixings:</b> screws, nails, nuts &amp; bolts · knock-down fittings and nuts &amp; bolts can be taken apart"
   ],
   [
    "Finishes",
    "Protect the material and improve appearance<br/><b>Wood:</b> varnish, oil, paint, wax, stain<br/><b>Metal:</b> paint, lacquer, plastic dip-coating, polishing<br/>Prepare surfaces first by sanding/abrading<br/><b>Plastics:</b> usually self-finishing — edges polished"
   ]
  ]
 },
 {
  "h": "🏭 Commercial Manufacture",
  "cards": [
   [
    "Scales of production",
    "<b>One-off:</b> single bespoke item, made by skilled workers · <b>Mass:</b> large numbers of identical products, often on an automated production line<br/>(The N5 course asks about one-off and mass; batch production is covered at Higher)"
   ],
   [
    "Commercial processes",
    "<b>Vacuum forming:</b> heated thermoplastic sheet sucked over a pattern by a vacuum — thin walls, draft angles, rounded corners (trays, packaging)<br/><b>Injection moulding:</b> molten plastic forced under pressure into a mould — ejector pin marks, sprue mark (casings, toys)<br/><b>Rotational moulding:</b> plastic powder in a heated mould rotated on two axes — hollow, seamless (traffic cones, kayaks)<br/><b>Sand casting:</b> molten metal poured into a sand mould made from a pattern — rough surface, split line<br/><b>Die casting:</b> molten metal forced under pressure into a steel die — smooth, detailed parts for mass production"
   ],
   [
    "CAD/CAM",
    "Computer-Aided Design and Manufacture: laser cutters, CNC routers, 3D printers<br/>Accurate, repeatable, faster for complex shapes; set-up cost and skills needed"
   ],
   [
    "Sustainability",
    "Reduce · Reuse · Recycle · Repair · Rethink · Refuse<br/>Choose renewable or recycled materials, design for disassembly, reduce energy and waste"
   ]
  ]
 }
];

// Mock exams: questions drawn at random from the whole bank, 1 mark each
const MOCK_INTRO="Practice sets drawn from the whole question bank.<br/><strong>The real SQA exam:</strong> one question paper · 80 marks · 1 hour 45 minutes (Section 1: 60 marks · Section 2: 20 marks)";
const MOCK_PAPERS=[{"key": "paper1", "title": "Paper 1 — Mixed Questions", "short": "Paper 1", "desc": "25 questions · 30 minutes · all units", "n": 25, "mins": 30}, {"key": "paper2", "title": "Paper 2 — Mixed Questions", "short": "Paper 2", "desc": "25 questions · 40 minutes · all units", "n": 25, "mins": 40}];
const MOCK_GRADES=[{"min": 70, "grade": "A", "msg": "Outstanding! An A-grade performance."}, {"min": 60, "grade": "B", "msg": "Well done! Review the questions you dropped to push for an A."}, {"min": 50, "grade": "C", "msg": "Good effort! Target your weakest topics to move up."}, {"min": 40, "grade": "D", "msg": "Keep revising — use Smart Mix to work on the topics you found hardest."}, {"min": 0, "grade": "No Award", "msg": "Don't give up! Review your answers, then try again."}];

const EXAM_TIPS=[
 [
  "✏️",
  "<strong>Use design vocabulary</strong> — name the design factor (function, aesthetics, ergonomics) and explain how it affects the product."
 ],
 [
  "🪵",
  "<strong>Justify material choices</strong> — name the specific material and give a property that makes it suitable, e.g. \"acrylic, because it is easily formed and needs no finish\"."
 ],
 [
  "🏭",
  "<strong>Know your processes</strong> — know the uses and identifying features of vacuum forming, injection moulding, rotational moulding, sand casting and die casting, plus the benefits and drawbacks of CAM, laser cutters and 3D printers."
 ],
 [
  "📊",
  "<strong>Show your reasoning</strong> — for 2-mark questions, give two separate points. Watch for command words: \"state\", \"outline\", \"describe\", \"explain\"."
 ],
 [
  "⏱",
  "<strong>Manage your time</strong> — if stuck, move on and come back. Never leave a blank — an attempt may get a mark."
 ]
];
const LINKS=[
 [
  "https://www.sqa.org.uk/sqa/47457.html",
  "SQA — Nat 5 Design &amp; Manufacture",
  "Official course specification, past papers &amp; marking instructions"
 ],
 [
  "https://www.bbc.co.uk/bitesize/subjects/z6xpb9q",
  "BBC Bitesize — Nat 5 Design &amp; Manufacture",
  "Notes, practical guides and exam advice"
 ],
 [
  "https://scholar.hw.ac.uk",
  "SCHOLAR (Heriot-Watt)",
  "Detailed online courses for Scottish Nat 5 subjects"
 ],
 [
  "https://www.sqa.org.uk/pastpapers/findpastpaper.htm?level=N5&subject=Design+and+Manufacture",
  "SQA — Past Papers",
  "Past question papers and marking instructions for Design &amp; Manufacture"
 ]
];
const ABOUT="Covers all areas of the SQA Nat 5 Design &amp; Manufacture course: Design, Materials, Tools &amp; Processes, and Commercial Manufacture.<br/><br/> ✅ Verified against SQA Course Spec <strong>C819 75</strong> (valid from 2017–18, confirmed current 2025–26).<br/><br/> 86 practice questions · 3 interactive worksheets (13 questions) · Mock exams · Flashcards · Timed challenge.<br/><br/> Progress saves automatically in your browser — nothing is sent anywhere. Not affiliated with the SQA.";
