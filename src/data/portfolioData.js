export const portfolioData = {
    personal: {
        name: "Xin Tang",
        title: "Bridging Biology & Code",
        description: "A scientist and developer passionate about leveraging technology to solve complex biological problems. From wet lab to web app, I build innovative solutions.",
        photo: "https://placehold.co/400x400/E2E8F0/4A5568?text=Your+Photo",
        email: "tangxin531@gmail.com",
        resume: {
            label: "Download Resume",
            link: "/Xin_Tang_Resume.pdf" // place the file in public/ as Xin_Tang_Resume.pdf
        }
    },

    publications: [
        {
            title: "Discovery of Cell Number-Interstitial Fluid Volume (CIF) Ratio Reveals Secretory Autophagy Pathway to Supply eHsp90α for Wound Healing",
            authors: "Tang, X., Chang, C., et al.",
            year: "2024",
            journal: "Cells",
            link: "https://www.mdpi.com/2073-4409/13/15/1280"
        },
        {
            title: "Previously unrecognized and potentially consequential challenges facing Hsp90 inhibitors in cancer clinical trials",
            authors: "Chang, C., Tang, X., et al.",
            year: "2024",
            journal: "Cell Stress and Chaperones",
            link: "https://www.sciencedirect.com/science/article/pii/S1355814524001135"
        },
        {
            title: "Novel readthrough agent suppresses nonsense mutations and restores functional type VII collagen and laminin 332 in epidermolysis bullosa",
            authors: "Levian, B., Hou, YP., et al.",
            year: "2024",
            journal: "Molecular Therapy Nucleic Acids",
            link: "https://www.cell.com/molecular-therapy-family/nucleic-acids/fulltext/S2162-2531(24)00221-X?uuid=uuid%3Ae5f83d1e-9728-4922-82f0-bd9010d13630"
        },
        {
            title: "The Distinct Assignments for Hsp90α and Hsp90β: More Than Skin Deep.",
            authors: "Chang, C., Tang, X., et al.",
            year: "2023",
            journal: "Cells",
            link: "https://www.mdpi.com/2073-4409/12/12/1568"
        },
        {
            title: "A Modified Differential Centrifugation Protocol for Isolation and Quantitation of Extracellular Heat Shock Protein 90 (eHsp90)",
            authors: "Chang, C., Tang, X., et al.",
            year: "2023",
            journal: "Chaperones. Methods in Molecular Biology",
            link: "https://link.springer.com/protocol/10.1007/978-1-0716-3342-7_19"
        },
        {
            title: "Heterogeneous Responses and Isoform Compensation the Dim Therapeutic Window of Hsp90 ATP-Binding Inhibitors in Cancer.",
            authors: "Tang, X., Chang, C., et al.",
            year: "2022",
            journal: "Molecular and Cellular Biology",
            link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8852742/"
        },
        {
            title: "LRP-1 receptor combines EGFR signalling and eHsp90α autocrine to support constitutive breast cancer cell motility in absence of blood supply.",
            authors: "Tang X, Chang C, et al.",
            year: "2022",
            journal: "Cancer Gene Ther",
            link: "https://www.nature.com/articles/s41598-022-16161-y"
        },
        {
            title: "Heat shock protein-90alpha (Hsp90α) stabilizes hypoxia-inducible factor-1α (HIF-1α) in support of spermatogenesis and tumorigenesis.",
            authors: "Tang X, Chang C, et al.",
            year: "2021",
            journal: "Scientific Reports",
            link: "https://pubmed.ncbi.nlm.nih.gov/33664459/"
        },
        {
            title: "Wound Healing Driver Gene and Therapeutic Development: Political and Scientific Hurdles.",
            authors: "Tang X, Chang C, et al.",
            year: "2021",
            journal: "Advances in Wound Care",
            link: "https://pubmed.ncbi.nlm.nih.gov/32966158/"
        },
        {
            title: "Tumour-Secreted Hsp90α on External Surface of Exosomes Mediates Tumour - Stromal Cell Communication via Autocrine and Paracrine Mechanisms.",
            authors: "Tang X, Chang C, et al.",
            year: "2019",
            journal: "Scientific Reports",
            link: "https://pubmed.ncbi.nlm.nih.gov/31641193/"
        },
        {
            title: "After Conventional Wisdom Has Failed, What Drives Wound Healing?",
            authors: "Lincoln, V., Tang, X., et al.",
            year: "2019",
            journal: "EMJ",
            link: "https://pdfs.semanticscholar.org/fab5/06503fee536fc0179d3b5fc829fce4fc2991.pdf"
        },
        {
            title: "Extracellular HSP90α Versus Intracellular HSP90β in Wound Healing and Cancer.",
            authors: "Lincoln, V., Tang, X., et al.",
            year: "2019",
            journal: "Heat Shock Proteins in Signaling Pathways",
            link: "https://link.springer.com/chapter/10.1007/978-3-030-03952-3_15"
        },
    ],

    techniques: [
        { name: "CRISPR-Cas9", icon: "dna" },
        { name: "Exosome isolation", icon: "bubble" }, 
        { name: "Lentivirus infection", icon: "virus" }, 
        { name: "H&E / IHC Staining", icon: "palette" },        // palette/brush = staining
        { name: "Animal Experiment", icon: "rabbit" }, 
        { name: "Skin equivalent", icon: "skin" },          
        { name: "(Stem) Cell culture", icon: "cell" },
        { name: "Data analysis", icon: "bar-chart" },          
        { name: "Protein Purification", icon: "filter" },       // filter = purification
        { name: "ELISA", icon: "beaker" },                      // beaker = assay/plate
        { name: "Immunoprecipitation (IP)", icon: "link" },
        { name: "Confocal Microscopy", icon: "microscope" },
        { name: "Flow Cytometry", icon: "scatter-chart" },
        { name: "Western Blot", icon: "test-tubes" },
        { name: "PCR & qPCR", icon: "pipette" },
    ],

    projects: [
        {
            title: "Hypertension Educational Tool",
            description: "An interactive web application for educating users about hypertension, featuring interactive visualizations and educational content.",
            image: "https://placehold.co/600x400/E2E8F0/4A5568?text=Hypertension+Tool",
            technologies: ["React", "JavaScript", "CSS", "HTML"],
            link: "https://github.com/yoasaaa/hypertension-educational-tool",
            demo: "https://hypertension-educational-tool.web.app",
            video: "https://www.youtube.com/watch?v=xk4B3MkzSzc"
        },
        {
            title: "Pathology AI Classification",
            description: "Advanced machine learning system for lymph node metastasis classification using deep learning + ML hybrid approach. Achieved 0.832 AUC with clinical-grade performance.",
            image: "https://placehold.co/600x400/E2E8F0/4A5568?text=Pathology+AI",
            technologies: ["Python", "PyTorch", "scikit-learn", "ResNet-50", "OpenCV"],
            link: "https://github.com/txandmj/pathology-classification/tree/main",
            demo: "https://txandmj.github.io/pathology-classification-showcase/",
            research: true
        }
    ],

    skills: [
        "C++", "Java", "SQL", "TypeScript", "C#", "Python", "JavaScript", "React", "Node.js",
        "HTML", "CSS", "Docker","Firebase", "PyTorch", "Scikit-learn", "Pandas", "Git & GitHub", "OpenCV", "Zookeeper", "Protobuf", "Visual Studio"
    ],

    social: [
        { name: "mail", link: "mailto:tangxin531@gmail.com" },
        { name: "linkedin", link: "https://www.linkedin.com/in/xintang730/" },
        { name: "github", link: "https://github.com/txandmj" }
    ]
};
