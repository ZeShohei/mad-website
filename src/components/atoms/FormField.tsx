import type { ReactNode } from "react";

export function FormField({
														label,
														children,
													}: {
	label: string;
	children: ReactNode;
}) {
	return (
		<label className="block bg-obsidian px-4 py-4">
			<span className="mb-2 block text-xs uppercase tracking-[0.25em] text-gunmetal">
				{label}
			</span>

			<div className="[&_input]:w-full [&_input]:bg-transparent [&_input]:text-lg [&_input]:font-light [&_input]:text-soft-white [&_input]:outline-none [&_input]:placeholder:text-gunmetal/60 [&_select]:w-full [&_select]:bg-transparent [&_select]:text-lg [&_select]:font-light [&_select]:text-soft-white [&_select]:outline-none [&_textarea]:w-full [&_textarea]:resize-none [&_textarea]:bg-transparent [&_textarea]:text-lg [&_textarea]:font-light [&_textarea]:text-soft-white [&_textarea]:outline-none [&_textarea]:placeholder:text-gunmetal/60">
				{children}
			</div>
		</label>
	);
}