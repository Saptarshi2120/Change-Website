"use client"

import { motion } from "framer-motion"

const mathExpressions = [
  {
    expression: "Love = lim (x→∞) (Us)",
    description: "Our love has no bounds, growing infinitely as time passes.",
  },
  {
    expression: "∫(Tears to Smiles) dx = Me + You",
    description: "Together, we transform every tear into a smile.",
  },
  {
    expression: "Commitment = 365 × Hug²",
    description: "Every day, my commitment to you grows exponentially.",
  },
  {
    expression: "∞ = ∑ Moments(with you)",
    description: "The sum of our moments together equals infinity.",
  },
]

export default function ChalkboardMath() {
  return (
    <div className="bg-slate-800 rounded-lg p-8 shadow-xl border border-slate-700 chalk-board">
      {mathExpressions.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 last:mb-0"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.3 + 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl text-white font-['Caveat',_cursive] md:w-1/2 chalk-text"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              {item.expression}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.3 + 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-lg text-slate-300 font-['Playfair_Display',_serif] md:w-1/2"
            >
              {item.description}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
