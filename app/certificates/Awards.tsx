import { Card } from "@/components/ui/card";

export default function Awards() {
  const awards = [
    {
      title: "Electronic Data Processing Specialist",
      issuer: "Civil Service Commission (CSC)",
      date: "December 11, 2024",
      type: "Certification",
      description:
        "Certification awarded to individuals who passed the proficiency test or completed a training course conducted by the DICT, covering Systems Analysis and Design, and Computer Programming courses in Java, C#, or Visual Basic.",
      credentialId: "CN: 320114240005",
    },
    {
      title: "Certificate of Proficiency in Computer Programming",
      issuer: "Department of Information and Communications Technology (DICT)",
      date: "August 20, 2024",
      type: "Certification",
      description:
        "Certification awarded to individuals who successfully passed both the written and hands-on proficiency examinations in computer programming, conducted by the DICT.",
      credentialId: "",
    },
    {
      title: "Programmer of the Year",
      issuer: "Pangasinan State University – Urdaneta City Campus",
      date: "August 21, 2023",
      type: "Award",
      description:
        "Awarded in recognition of outstanding performance and excellence in programming during my time at Pangasinan State University – Urdaneta City Campus.",
      credentialId: "",
    },
    {
      title:
        "Best Thesis Awardee — (Stressio: A Self-Care Mobile Application for Stress Management)",
      issuer: "Pangasinan State University – Urdaneta City Campus",
      date: "August 21, 2023",
      type: "Award",
      description:
        "Awarded for outstanding capstone project titled 'Stressio: A Self-Care Mobile Application for Stress Management', recognized as the Best Thesis.",
      credentialId: "",
    },
    {
      title: "Test of Practical Competency in ICT (TOPCIT) Level 2",
      issuer: "Institute for Information & Communications Technology Promotion",
      date: "July 26, 2023",
      type: "Certification",
      description:
        "An international certification indicating Level 2 proficiency, signifying the holder is an advanced beginner capable of understanding and evaluating technical and business problems in the field of ICT, though not yet fully capable of independently solving complex issues.",
      credentialId: "CN: TL2305001198",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Certification":
        return "bg-primary text-primary-foreground";
      case "Award":
        return "bg-accent text-accent-foreground";
      case "Recognition":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="px-5 sm:px-10 py-10 h-full">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {awards.map((award, index) => (
          <div key={index} data-aos="zoom-in">
            <Card className="card-elegant h-full p-4 flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 leading-tight">
                      {award.title}
                    </h3>
                    <p className="text-primary font-medium">{award.issuer}</p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(
                      award.type
                    )}`}
                  >
                    {award.type}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {award.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-medium">{award.date}</span>
                <span className="font-mono">{award.credentialId}</span>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
