import Link from "next/link";

function MenuItem({ address, title, Icon }) {
  return (
    <div className="hover:text-amber-500">
      <Link href={address}>
        <Icon className="text-2xl sm:hidden" />
        <p className="uppercase hidden sm:inline text-sm">{title}</p>
      </Link>
    </div>
  );
}

export default MenuItem;
