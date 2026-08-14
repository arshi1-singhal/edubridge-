// Branches offered on EduBridge.
// Add, edit, or remove a branch here — the whole site updates automatically.
export const BRANCHES = [
  { key: "cse", label: "CSE", blurb: "Computer Science & Engineering", icon: "💻" },
  { key: "ece", label: "ECE", blurb: "Electronics & Communication Engineering", icon: "📡" },
  { key: "it", label: "IT", blurb: "Information Technology", icon: "🖧" },
  { key: "aiml", label: "AI/ML", blurb: "Artificial Intelligence & Machine Learning", icon: "🤖" },
  { key: "cseai", label: "CSE-AI", blurb: "Computer Science & Engineering (AI)", icon: "🧠" },
  { key: "eceai", label: "ECE-AI", blurb: "Electronics & Communication (AI)", icon: "📡" },
  { key: "dmam", label: "DMAM", blurb: "Design & Manufacturing / Applied Mechanics", icon: "⚙️" },
  { key: "mac", label: "MAC", blurb: "Mathematics & Computing", icon: "🔢" },
  { key: "mae", label: "MAE", blurb: "Mechanical & Automobile Engineering", icon: "🔧" },
];

export const SEMESTERS = ["1", "2", "3", "4"];

// Convenience lookup for a branch label from its key.
export function getBranchLabel(branch) {
  const found = BRANCHES.find((b) => b.key === branch);
  return found ? found.label : branch.toUpperCase();
}
