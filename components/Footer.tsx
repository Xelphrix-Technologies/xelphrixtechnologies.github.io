export default function Footer() {
  return (
    <footer className="bg-[#0B1120] border-t border-gray-800 py-10 px-6 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Xelphrix Technologies. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-gray-400 mt-4 md:mt-0">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}