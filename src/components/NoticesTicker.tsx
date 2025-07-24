import { motion } from "framer-motion";

const notices = [
  "🎓 New semester starts March 15th, 2024 - Registration deadline March 10th",
  "📢 Parent-Teacher meeting scheduled for March 20th, 2024",
  "🏆 Science Fair registration now open - Submit projects by April 1st",
  "📚 Library will remain closed on March 18th for maintenance",
  "🎭 Annual cultural program auditions on March 25th - All students welcome",
  "⚽ Inter-school sports competition applications due March 30th",
  "🎨 Art exhibition showcase planned for April 5th - Student works featured"
];

export const NoticesTicker = () => {
  return (
    <div className="bg-education-orange text-white py-2 overflow-hidden">
      <div className="flex items-center">
        <div className="flex-shrink-0 px-4 py-1 bg-white/20 rounded-r-lg mr-4">
          <span className="font-semibold text-sm">Latest News</span>
        </div>
        <div className="flex-1 overflow-hidden">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{
              x: [0, -100 * notices.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {notices.concat(notices).map((notice, index) => (
              <span key={index} className="text-sm font-medium">
                {notice}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};