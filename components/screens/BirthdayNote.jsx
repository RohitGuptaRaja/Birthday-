import { motion } from "framer-motion"

export default function BirthdayNote({ onNext }) {
  return (
    <div className="text-center px-6">
      <motion.p
        className="glass-card p-6 text-white text-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Ye website gift nahi hai…  
        <br />
        bas ek chhota sa effort hai  
        <br />
        jo maine dil se banaya hai 💖
      </motion.p>

      <motion.button onClick={onNext} className="btn-primary">
        Finish ❤️
      </motion.button>
    </div>
  )
}
