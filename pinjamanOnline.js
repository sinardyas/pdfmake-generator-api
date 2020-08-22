import TimeZone from 'moment-timezone';
import imageData from './assets/images/headerbase64';

class PinjamanOnline {
	constructor(
		noAnggota,
		namaLengkapKtp,
		jenisKelamin,
		jabatan,
		tempatPelayananTerdaftar,
		pekerjaan,
		tglLahir,
		alamatKtp,
		alamatTinggal,
		noTelp,
		suamiIstriNamaKtp,
		suamiIstriNoAnggota,
		suamiIstriPekerjaan,
		suamiIstriJabatan,
		suamiIstriAlamatKantor,
		suamiIstriNoTelpKantor,
		kerabatNamaKtp,
		kerabatNoAnggota,
		kerabatNoTelp,
		kerabatAlamatKtp,
		kerabatStatusHubungan,
		saldoSimpananSaham,
		saldoSisaPinjaman,
		saldoSimpananMultiguna,
		saldoSimpananMegapolitan,
		jumlahPinjaman,
		jumlahPermohonanPinjaman,
		jenisPinjaman,
		tujuanPinjaman,
		bayaranPerbulan,
		jangkaWaktuPinjaman,
		jumlahPermohonanPinjamanTerbilang,
		jaminanPinjaman,
		hargaJaminan,
		lokasiKondisiJaminan,
		pemilikJaminan,
		statusJaminan
	) {
		this.noAnggota = noAnggota;
		this.namaLengkapKtp = namaLengkapKtp;
		this.jenisKelamin = jenisKelamin;
		this.jabatan = jabatan;
		this.tempatPelayananTerdaftar = tempatPelayananTerdaftar;
		this.pekerjaan = pekerjaan;
		this.tglLahir = tglLahir;
		this.alamatKtp = alamatKtp;
		this.alamatTinggal = alamatTinggal;
		this.noTelp = noTelp;
		this.suamiIstriNamaKtp = suamiIstriNamaKtp;
		this.suamiIstriNoAnggota = suamiIstriNoAnggota;
		this.suamiIstriPekerjaan = suamiIstriPekerjaan;
		this.suamiIstriJabatan = suamiIstriJabatan;
		this.suamiIstriAlamatKantor = suamiIstriAlamatKantor;
		this.suamiIstriNoTelpKantor = suamiIstriNoTelpKantor;
		this.kerabatNamaKtp = kerabatNamaKtp;
		this.kerabatNoAnggota = kerabatNoAnggota;
		this.kerabatNoTelp = kerabatNoTelp;
		this.kerabatAlamatKtp = kerabatAlamatKtp;
		this.kerabatStatusHubungan = kerabatStatusHubungan;
		this.saldoSimpananSaham = saldoSimpananSaham;
		this.saldoSisaPinjaman = saldoSisaPinjaman;
		this.saldoSimpananMultiguna = saldoSimpananMultiguna;
		this.saldoSimpananMegapolitan = saldoSimpananMegapolitan;
		this.jumlahPinjaman = jumlahPinjaman;
		this.jumlahPermohonanPinjaman = jumlahPermohonanPinjaman;
		this.jenisPinjaman = jenisPinjaman;
		this.tujuanPinjaman = tujuanPinjaman;
		this.bayaranPerbulan = bayaranPerbulan;
		this.jangkaWaktuPinjaman = jangkaWaktuPinjaman;
		this.jumlahPermohonanPinjamanTerbilang = jumlahPermohonanPinjamanTerbilang;
		this.jaminanPinjaman = jaminanPinjaman;
		this.hargaJaminan = hargaJaminan;
		this.lokasiKondisiJaminan = lokasiKondisiJaminan;
		this.pemilikJaminan = pemilikJaminan;
		this.statusJaminan = statusJaminan;
	}

	clone(data) {
		const formatCurrency = (amount) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'IDR' }).format(amount);

		this.noAnggota = data.noAnggota ? data.noAnggota : '';
		this.namaLengkapKtp = data.namaLengkapKtp ? data.namaLengkapKtp : '';
		this.jenisKelamin = data.jenisKelamin ? data.jenisKelamin : '';
		this.jabatan = data.jabatan ? data.jabatan : '';
		this.tempatPelayananTerdaftar = data.tempatPelayananTerdaftar ? data.tempatPelayananTerdaftar : '';
		this.pekerjaan = data.pekerjaan ? data.pekerjaan : '';
		this.tglLahir = data.tglLahir ? TimeZone(data.tglLahir).tz('Asia/Jakarta').format('DD/MM/YYYY') : '';
		this.alamatKtp = data.alamatKtp ? data.alamatKtp : '';
		this.alamatTinggal = data.alamatTinggal ? data.alamatTinggal : '';
		this.noTelp = data.noTelp ? data.noTelp : '';
		this.suamiIstriNamaKtp = data.suamiIstriNamaKtp ? data.suamiIstriNamaKtp : '';
		this.suamiIstriNoAnggota = data.suamiIstriNoAnggota ? data.suamiIstriNoAnggota : '';
		this.suamiIstriPekerjaan = data.suamiIstriPekerjaan ? data.suamiIstriPekerjaan : '';
		this.suamiIstriJabatan = data.suamiIstriJabatan ? data.suamiIstriJabatan : '';
		this.suamiIstriAlamatKantor = data.suamiIstriAlamatKantor ? data.suamiIstriAlamatKantor : '';
		this.suamiIstriNoTelpKantor = data.suamiIstriNoTelpKantor ? data.suamiIstriNoTelpKantor : '';
		this.kerabatNamaKtp = data.kerabatNamaKtp ? data.kerabatNamaKtp : '';
		this.kerabatNoAnggota = data.kerabatNoAnggota ? data.kerabatNoAnggota : '';
		this.kerabatNoTelp = data.kerabatNoTelp ? data.kerabatNoTelp : '';
		this.kerabatAlamatKtp = data.kerabatAlamatKtp ? data.kerabatAlamatKtp : '';
		this.kerabatStatusHubungan = data.kerabatStatusHubungan ? data.kerabatStatusHubungan : '';
		this.saldoSimpananSaham = data.saldoSimpananSaham ? formatCurrency(data.saldoSimpananSaham) : '';
		this.saldoSisaPinjaman = data.saldoSisaPinjaman ? formatCurrency(data.saldoSisaPinjaman) : '';
		this.saldoSimpananMultiguna = data.saldoSimpananMultiguna ? formatCurrency(data.saldoSimpananMultiguna) : '';
		this.saldoSimpananMegapolitan = data.saldoSimpananMegapolitan ? formatCurrency(data.saldoSimpananMegapolitan) : '';
		this.jumlahPinjaman = data.jumlahPinjaman ? formatCurrency(data.jumlahPinjaman) : '';
		this.jumlahPermohonanPinjaman = data.jumlahPermohonanPinjaman ? formatCurrency(data.jumlahPermohonanPinjaman) : '';
		this.jenisPinjaman = data.jenisPinjaman ? data.jenisPinjaman : '';
		this.tujuanPinjaman = data.tujuanPinjaman ? data.tujuanPinjaman : '';
		this.bayaranPerbulan = data.bayaranPerbulan ? formatCurrency(data.bayaranPerbulan) : '';
		this.jangkaWaktuPinjaman = data.jangkaWaktuPinjaman ? data.jangkaWaktuPinjaman : '';
		this.jumlahPermohonanPinjamanTerbilang = data.jumlahPermohonanPinjamanTerbilang ? data.jumlahPermohonanPinjamanTerbilang : '';
		this.jaminanPinjaman = data.jaminanPinjaman ? data.jaminanPinjaman : '';
		this.hargaJaminan = data.hargaJaminan ? formatCurrency(data.hargaJaminan) : '';
		this.lokasiKondisiJaminan = data.lokasiKondisiJaminan ? data.lokasiKondisiJaminan : '';
		this.pemilikJaminan = data.pemilikJaminan ? data.pemilikJaminan : '';
		this.statusJaminan = data.statusJaminan ? data.statusJaminan : '';

		return this;
	}
}

const templatePdf = (data) => {
	const userPinjaman = new PinjamanOnline().clone(data);

	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();

	return {
		header: {
			image: 'headerImg',
			width: 550,
			alignment: 'center'
		},
		content: [
			'\n\n\n',
			{
				text: 'SURAT PERMOHONAN PINJAMAN',
				style: 'header'
			},
			{
				columns: [
					{
						text: `Nama Pemohon: ${userPinjaman.namaLengkapKtp}`,
						width: '70%'
					},
					{
						text: `Tanggal: ${day} - ${month} - ${year}`
					}
				]
			},
			{
				text: 'A. DATA DIRI ANGGOTA',
				style: 'sectionTitle'
			},
			{
				columns: [
					{
						text: `1. Nama (Sesuai KTP) : ${userPinjaman.namaLengkapKtp}`,
						width: 250
					},
					{
						text: 'No. Buku Anggota : 14110110099'
					}
				]
			},
			{
				columns: [
					{
						text: `2. Pekerjaan : ${userPinjaman.pekerjaan}`,
						width: 250
					},
					{
						text: `Jabatan Sekarang : ${userPinjaman.jabatan}`
					}
				]
			},
			{
				columns: [
					{
						text: `3. Tempat/Tanggal Lahir : ${userPinjaman.tglLahir}`,
						width: 350
					},
					{
						text: `Jenis Kelamin : ${userPinjaman.jenisKelamin}`,
						width: 'auto'
					}
				]
			},
			{
				columns: [
					{
						text: `4. Alamat Rumah (KTP) : ${userPinjaman.alamatKtp}`
					}
				]
			},
			{
				columns: [
					{
						text: `5. Alamat Tinggal (Saat ini) : ${userPinjaman.alamatTinggal}`
					}
				]
			},
			{
					columns: [
					{
						text: `6. No. Telepon / HP : ${userPinjaman.noTelp}`
					}
				]
			},
			{
				text: 'B. DATA SUAMI / ISTRI',
				style: 'sectionTitle'
			},
			{
				columns: [
					{
						text: `7. Nama : ${userPinjaman.suamiIstriNamaKtp}`,
						width: 250
					},
					{
						text: `No. Buku Anggota : ${userPinjaman.suamiIstriNoAnggota}`
					}
				]
			},
			{
				columns: [
					{
						text: `8. Pekerjaan : ${userPinjaman.suamiIstriPekerjaan}`,
						width: 250
					},
					{
						text: `Jabatan Sekarang : ${userPinjaman.suamiIstriJabatan}`
					}
				]
			},
			{
				columns: [
					{
						text: `9. Alamat Perusahaan : ${userPinjaman.suamiIstriAlamatKantor}`
					}
				]
			},
			{
				columns: [
					{
						text: `\u200B\tNo. Telp Perusahaan : ${userPinjaman.suamiIstriNoTelpKantor}`
					}
				]
			},
			{
				text: 'C. DATA KELUARGA TERDEKAT yang dapat dihubungi.',
				style: 'sectionTitle'
			},
			{
				columns: [
					{
						text: `10. Nama : ${userPinjaman.kerabatNamaKtp}`,
						width: 250
					},
					{
						text: `No. Buku Anggota : ${userPinjaman.kerabatNoAnggota}`
					}
				]
			},
			{
				columns: [
					{
						text: `11. Alamat : ${userPinjaman.kerabatAlamatKtp}`
					}
				]
			},
			{
				columns: [
					{
						text: `12. Hubungan dgn Pemohon : ${userPinjaman.kerabatStatusHubungan}`,
						width: 250
					},
					{
						text: `No. Telp : ${userPinjaman.kerabatNoTelp}`
					}
				]
			},
			'\n\n\n\n\n\n',
			{
				text: 'D. DATA KEUANGAN ANGGOTA',
				style: 'sectionTitle'
			},
			{
				columns: [
					{
						text: `13. Saldo Simpanan Saham : ${userPinjaman.saldoSimpananSaham}`,
						width: 250
					},
					{
						text: `16. Sisa Pinjaman : ${userPinjaman.saldoSisaPinjaman}`
					}
				]
			},
			{
				columns: [
					{
						text: `14. Saldo Simpanan Megapolitan : ${userPinjaman.saldoSimpananMegapolitan}`,
					}
				]
			},
			{
				columns: [
					{
						text: `15. Saldo Simpanan Multiguna : ${userPinjaman.saldoSimpananMultiguna}`,
					}
				]
			},
			{
				text: 'E. PINJAMAN YANG DIMOHON',
				style: 'sectionTitle'
			},
			{
				columns: [
					{
						text: `19. Jumlah Permohonan Pinjaman : ${userPinjaman.jumlahPermohonanPinjaman}`,
					}
				]
			},
			{
				columns: [
					{
						text: `20. Jenis Pinjaman : ${userPinjaman.jenisPinjaman}`,
						width: 250
					},
					{
						text: `Jangka waktu pengembalian : ${userPinjaman.jangkaWaktuPinjaman}`,
						width: 'auto'
					}
				]
			},
			{
				columns: [
					{
						text: `21. Tujuan Pinjaman : ${userPinjaman.tujuanPinjaman}`,
						width: 250
					}
				]
			},
			{
				columns: [
					{
						text: `22. Jaminan yang akan diserahkan : ${userPinjaman.jaminanPinjaman}`,
						width: 250
					}
				]
			},
			{
				columns: [
					{
						text: `23. Pemilik Jaminan : ${userPinjaman.pemilikJaminan}`,
						width: 250
					},
					{
						text: `Status Jaminan : ${userPinjaman.statusJaminan}`,
						width: 'auto'
					}
				]
			},
			{
				columns: [
					{
						text: `24. Lokasi/Kondisi : ${userPinjaman.lokasiKondisiJaminan}`,
						width: 250
					},
					{
						text: `Harga Jaminan : ${userPinjaman.hargaJaminan}`,
						width: 'auto'
					}
				]
			},
			{
				columns: [
					{
						text: `25. Kemampuan Bayar Bulanan : ${userPinjaman.bayaranPerbulan}`,
						width: 250
					}
				]
			},
			{
				columns: [
					{
						text: 'Demikian surat permohonan ini saya buat sesuai dengan keadaan yang sebenarny',
						width: '100%'
					}
				]
			},
			{
				columns: [
					{
						text: 'Pemohon',
						width: '25%',
						alignment: 'center'
					},
					{
						text: 'Mengetahui \nSuami/Istri',
						width: '25%',
						alignment: 'center'
					},
					{
						text: 'Penjamin/Kordinator KBA',
						width: '25%',
						alignment: 'center'
					},
					{
						text: 'Staf Pemeriksa',
						width: '25%',
						alignment: 'center'
					}
				]
			},
			'\n\n\n',
			{
				columns: [
					{
						text: '(.....................)',
						width: '25%',
						alignment: 'center'
					},
					{
						text: '(.....................)',
						width: '25%',
						alignment: 'center'
					},
					{
						text: '(.....................)',
						width: '25%',
						alignment: 'center'
					},
					{
						text: '(.....................)',
						width: '25%',
						alignment: 'center'
					}
				]
			},
			{
				columns: [
					{
						text: 'No BA:',
						width: '25%'
					},
					{
						text: 'No BA:',
						width: '25%'
					},
					{
						text: 'No BA:',
						width: '25%'
					},
					{
						text: 'No BA:',
						width: '25%'
					}
				]
			},
			'\n\n\n\n\n\n\n',
			{
				columns: [
					{
						text: 'Kelengkapan Adm.',
						width: 100,
						fontSize: 10
					},
					{
						text: [
							'1\tFC KTP Suami/Istri 1 Lembar\n',
							'2\tFC Kartu Keluarga 1 Lembar\n',
							'3\tFC Surat Nikah 1 Lembar\n',
							'4\tSurat Ket. Domisili asli dari kelurahan\n',
							'5\tFC Sertifikat DIKSAR 1 Lembar\n',
							'6\tFC Sertifikat Literasi Keuangan 1 Lembar\n',
							'7\tFC Surat Keterangan Kerja\n',
							'8\tFC Rek. Listrik, air, dan telpon\n'
						],
						width: '45%',
						fontSize: 10
					},
					{
						text: [
							'9\tFC Slip Gaji 3 bulan terakhir\n',
							'10\tFC Rek. Koran Bank (bukti transfer gaji)\n',
							'11\tFC Rek. Koran Kartu Kredit 3 bulan terakhir\n',
							'12\tFC Surat Ket. Usaha/SIUP/Akte Pendirian\n',
							'13\tFC Surat Barang Jaminan\n',
							'14\tFC Surat Perintah Kerja (SPK)\n',
							'15\tFC Laporan Usaha 3 bulan terakhir\n',
							'16\tRincian Pennggunaan Dana\n',
							'17\tSurat Ket. Belum memiliki rumah (asli)\n'
						],
						width: '50%',
						fontSize: 10
					}
				]
			},
			'\n\n',
			{
				text: 'Pinjam dan Kelola Uang Sesuai Kemampuan Anda',
				bold: true,
				alignment: 'center'
			}
		],
		styles: {
			header: {
				fontSize: 18,
				bold: true,
				alignment: 'center'
			},
			bigger: {
				fontSize: 15,
				italics: true
			},
			sectionTitle: {
				bold: true
			},
			w30: {
				width: '30%'
			}
		},
		defaultStyle: {
			columnGap: 0,
			lineHeight: 2
		},
		images: {
			headerImg: imageData
		},
	};
};

export default templatePdf;